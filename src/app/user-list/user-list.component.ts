import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private chatSrvc: ChatService) {
    chatSrvc.getUsers().subscribe(usersa => {
      // this.users = usersa;
      usersa.forEach(model => {
        this.users.push(model.items);
      });
    });
  }

  ngOnInit() {}
}
