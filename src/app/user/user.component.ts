import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User = new User();

  constructor(userService: UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Submit --> OK");
    this.user = new User();
  }

}
