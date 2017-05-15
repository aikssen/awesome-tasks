import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthService } from 'ng-gapi';
import * as _ from 'lodash';
import GoogleUser = gapi.auth2.GoogleUser;

/*
 * This class was inspired by the library: https://github.com/rubenCodeforges/angular2-google-api
 * still with a lot of errors, in a close future, replace this library with
 * the native google javascript libray
 */

@Injectable()
export class GapiUserService {
  public static readonly SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser;
  private authInstance: any;

  constructor(private googleAuth: GoogleAuthService, private router: Router) {}

  public getToken(): string {
    let token: string = sessionStorage.getItem(GapiUserService.SESSION_STORAGE_KEY);
    if (!token) { // TODO: improve the way to auth
      // throw new Error('no token set , authentication required');
    }
    return sessionStorage.getItem(GapiUserService.SESSION_STORAGE_KEY);
  }

  public signIn(): void {
    this.googleAuth.getAuth().subscribe((auth) => {
      console.log(auth);
      this.authInstance = auth;
      console.log(this.authInstance);
      auth.signIn().then((res: any) => this.signInSuccessHandler(res));
    });
  }

  public singOut(): void {
    // FIX ME: here the only way to access the logout action is by performing
    // a reloging in order to have access to the auth object.
    this.googleAuth.getAuth().subscribe((auth) => {
      auth.signOut().then((res: any) => {
        sessionStorage.clear();
        location.reload();
      });
    });
  }

  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(GapiUserService.SESSION_STORAGE_KEY));
  }

  // function created to have access to the Google's user account
  public userOnSession(): any {
    return JSON.parse(sessionStorage.getItem('user')).w3;
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.user = res;
    sessionStorage.setItem('user', JSON.stringify(this.user));
    // TODO: manage the token expiration to re-loggin
    // res.getAuthResponse().expires_at
    // res.getAuthResponse().expires_in
    sessionStorage.setItem(
      GapiUserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
    );
    location.reload();
  }
}
