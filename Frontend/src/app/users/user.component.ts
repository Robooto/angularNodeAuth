import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  template: `
    <app-user-list [users]="users$ | async"></app-user-list>
  `,
  styles: []
})
export class UserComponent implements OnInit {
    users$: Observable<any>;
    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.users$ = this.apiService.getUsers();
    }

}