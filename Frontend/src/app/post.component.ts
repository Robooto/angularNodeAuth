import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-post',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>
                <h4>New Post</h4>
            </mat-card-title>
        </mat-card-header>
        <form>
                <mat-form-field style="width:100%;">
                        <textarea [(ngModel)]="postMsg" name="msg" matInput placeholder="Post Message"></textarea>
                </mat-form-field>
                <br>
                <button mat-raised-button color="primary" (click)="post()">Post</button>
        </form>
    </mat-card>
  `,
  styles: []
})
export class PostComponent implements OnInit {
    postMsg = '';
    constructor(private apiService: ApiService) {}

    ngOnInit() {
    }

    post() {
        this.apiService.saveMessage({msg: this.postMsg})
        .subscribe(
			data => console.log(data), 
			err => console.log(err)
		);
    }

}
