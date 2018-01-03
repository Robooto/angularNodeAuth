import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  template: `
    <div *ngFor="let item of messages">
      <mat-card >{{item?.msg}}</mat-card>
    </div>
  `,
  styles: []
})
export class MessagesComponent implements OnInit {
  @Input() messages: any[];
  constructor() { }

  ngOnInit() {
  }

}
