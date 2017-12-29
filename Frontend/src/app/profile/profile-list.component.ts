import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';

@Component({
  selector: 'profile-list',
  template: `
    <mat-list role="list">
        <mat-list-item role="listitem">Name: {{profile?.name}}</mat-list-item>
        <mat-list-item role="listitem">Email: {{profile?.email}}</mat-list-item>
        <mat-list-item role="listitem">Description: {{profile?.description}}</mat-list-item>
    </mat-list>
  `,
})
export class ProfileListComponent implements OnInit {
	@Input() profile: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
	}
	

}