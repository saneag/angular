import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  credentials: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private authentication: AuthenticationService) {}

  ngOnInit(): void {
    this.authentication.logout();
  }

  onSubmit() {
    this.authentication.login(
      this.credentials.value.email,
      this.credentials.value.password
    );
    this.credentials.reset();
  }
}
