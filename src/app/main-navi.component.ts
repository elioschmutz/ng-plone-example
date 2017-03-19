import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthenticationService } from '@plone/restapi-angular';

@Component({
  selector: 'main-navi',
  templateUrl: './main-navi.component.html',
  styleUrls: ['./main-navi.component.scss']
})
export class MainNaviComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
