import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private auth: AuthService,
              private router: Router,
              private title: Title
  ) {
    title.setTitle('Регистрация');
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    const {email, password, name} = this.form.value;
    const user = new User(email, password, name);

    this.auth.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['login'], {
          queryParams: {
            nowCanLogin: true
          }
        });
      });
  }

}
