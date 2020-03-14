import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher, RegisterComponent } from '../register/register.component';
import { UsersService } from 'src/app/shared/services/users.service';
import { MatDialogRef } from '@angular/material/dialog';
import { user } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  failedLogin: boolean = true;

  constructor(fb: FormBuilder, private usersSerivce: UsersService,
    private dialogRef: MatDialogRef<RegisterComponent>) {
    this.form = fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    }, {});
  }

  ngOnInit(): void {
  }

  async login() {
    let newUser = new user();
    newUser.username = this.form.controls['username'].value;
    newUser.password = this.form.controls['username'].value;
    newUser.email = this.form.controls['username'].value;
    newUser.isAdmin = false; // doesn't matter

    this.failedLogin = await this.usersSerivce.login(
      this.form.controls['username'].value,
      this.form.controls['password'].value
    );

    if (this.failedLogin) {
      console.log("login succeed.")
      this.dialogRef.close(true);
    }
  }
}
