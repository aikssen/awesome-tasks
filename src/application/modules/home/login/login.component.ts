import { Component, OnInit } from '@angular/core';
import { GapiUserService } from '../../../shared/services/gapiUser.service';

@Component({
  selector: 'home-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private gapiUserService: GapiUserService) {}

  ngOnInit() {}

  signIn(): void {
    this.gapiUserService.signIn();
  }
}
