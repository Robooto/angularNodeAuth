import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <div *ngFor="let user of users">
      <mat-card [routerLink]="['/profile', user._id]" style="cursor:pointer;">{{user?.email}}</mat-card>
    </div>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  @Input() users: any[];
  constructor() { }

  ngOnInit() {
  }

}