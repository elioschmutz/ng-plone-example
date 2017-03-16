import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthenticationService } from '@plone/restapi-angular';

@Component({
  selector: 'debug-bar',
  templateUrl: './debug-bar.component.html',
  styleUrls: ['./debug-bar.component.scss']
})
export class DebugBarComponent implements OnInit {
  authenticated: string;
  username: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    let authenticated = this.authenticationService.isAuthenticated.subscribe(
      (authenticated) => {
        this.authenticated = authenticated && 'Authenticated' || 'Anonymous';
        this.username = authenticated && this.authenticationService.getUserInfo().sub || '';
      });
    this.authenticationService.logout();
  }
  toggleLogin(): void {
    if (this.authenticated === 'Authenticated') {
      this.authenticationService.logout();
    } else {
      this.authenticationService.login('admin', 'admin');
    }
  }
}
