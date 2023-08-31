import { Component } from '@angular/core';

/**
 * @title login
 */
@Component({
  selector: 'login', 
  styleUrls: ['login.component.css'],
  templateUrl: 'login.component.html'
})
export class LoginFormDemo {
title: any;
logout() {
throw new Error('Method not implemented.');
}
  username: string = '';
  password: string = '';
  show: boolean = false;
  submit() {
    console.log('user name is ' + this.username);
    this.clear();
  }
  clear() {
    this.username = '';
    this.password = '';
    this.show = true;
  }
}
