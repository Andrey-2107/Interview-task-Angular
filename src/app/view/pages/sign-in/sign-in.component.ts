import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @ViewChild('mainForm', { static: false }) form;
  newEmail = '';
  newPassword = '';

  myForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.form.resetForm()
  }

  loginIn() {
    this.auth.login(this.newEmail, this.newPassword)
  }

}
