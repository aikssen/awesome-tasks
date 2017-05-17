import { Component, OnInit } from '@angular/core';
import { GapiUserService } from '../../../shared/services/gapiUser.service';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  constructor(private gapiUserService: GapiUserService) {}

  ngOnInit() {}

  signIn(): void {
    this.gapiUserService.signIn();
  }

  signOff(): void {
    this.gapiUserService.singOut();
  }

  isSignedIn(): boolean {
    return this.gapiUserService.isUserSignedIn();
  }
}