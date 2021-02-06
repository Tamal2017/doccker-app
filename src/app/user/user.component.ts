import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User = new User();
  success: boolean = false;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Submit --> OK");
    this.success = true;
    this.createUser();
    this.user = new User();
  }

  onClose(){
    this.success = false;
  }
  
  createUser(){
    this.userService.createUser(this.user).subscribe(
      res => console.log(res), 
      err => console.log(err)
      );
  }

}
