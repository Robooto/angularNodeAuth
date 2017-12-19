const mongoose = require('mongoose');
let   connection = null;
class Database {
    constructor() {}

    open(callback) {
        const options = {
            useMongoClient: true
        };
        mongoose.connect('mongodb://localhost/pssocial', options, (err) => {
            if (err) {
                console.log('mongoose.connect() failed: ' + err);
            }
        });
        connection = mongoose.connection;
        mongoose.Promise = global.Promise;

        mongoose.connection.on('error', (err) => {
            console.log('Error connecting to MongoDB: ' + err);
            callback(err, false);
        });
        
        mongoose.connection.once('open', () => {
            console.log('We have connected to mongodb');
            callback(null, true);
        });
    }

    // disconnect from database
    close() {
        connection.close(() => {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    }
}

module.exports = new Database();