import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthenticationService } from '@plone/restapi-angular';

@Component({
  selector: 'debug-bar',
  templateUrl: './debug-bar.component.html',
  styleUrls: ['./debug-bar.component.scss']
})
export class DebugBarComponent implements OnInit {
  authenticated: boolean;
  username: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    let authenticated = this.authenticationService.isAuthenticated.subscribe(
      (authenticated) => {
        this.authenticated = authenticated;
        this.username = authenticated && this.authenticationService.getUserInfo().sub || '';
      });
    this.authenticationService.logout();
  }
  getAuthenticationState() {
     return this.authenticated && 'Authenticated' || 'Anonymous';
  }

  login(): void {
    console.log(this.authenticationService.isAuthenticated.value);
    this.authenticationService.login('zopemaster', 'admin');
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
