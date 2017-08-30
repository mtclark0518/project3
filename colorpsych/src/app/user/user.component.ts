import { Component, OnInit } from '@angular/core';


import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    
  }
  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {this.loadAllUsers()})
  }
  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {this.users = users;})
  }
}
