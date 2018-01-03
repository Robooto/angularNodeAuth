import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <div *ngFor="let user of users">
      <mat-card [routerLink]="['/profile', user._id]" style="cursor:pointer;">{{user?.name}}</mat-card>
    </div>
  `,
  styles: []
})
export class UserListComponent implements OnInit {
  @Input() users: any[];
  constructor() { }

  ngOnInit() {
  }

}