import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$:Observable<User[]> = of([]);
  tableHeaders = ["Name", "Username", "Email", "Address", "Phone", "Website", "Company", ""];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
