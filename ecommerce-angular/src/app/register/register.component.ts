import { Component, OnInit } from '@angular/core';
import { User } from './../modal/Modal';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  progressBar = false;
  user: User = {} as User;
form: any = {
  username: null,
  password: null,
  address: null,
  admin: null,
  cardNumber: null,
  cvv: null,
  email: null,
  nameOnCard: null
};

  isSuccessful = false;
  isSignUpFailed = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;
    })
  }

  addUser() {
    this.userService.addUser(this.user).subscribe(user => {
      this.user = user;
      window.location.reload();
    });
  }

}
