import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  ActivatedRouteSnapshot,
  RouterState,
  RouterStateSnapshot
} from '@angular/router';
import { setTimeout } from 'timers';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user = { userName: '', password: '' };

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  login() {
    if (this.user.userName && this.user.password && this.user.password.length >= 8) {
      this.router.navigateByUrl('home');
    }
  }
}

