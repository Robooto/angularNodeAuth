import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MessagesComponent } from './messages.component';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

const materialMods = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...materialMods,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
