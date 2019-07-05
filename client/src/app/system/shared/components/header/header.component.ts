import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../../shared/models/user.model';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  name: string;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    const decodedToken = this.authService.getDecodedAccessToken(
      window.localStorage.getItem('auth-token')
    );
    this.name = decodedToken.name;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
