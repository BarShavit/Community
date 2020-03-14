import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { user } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { MatDialogRef } from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  failedRegistered: boolean = true;

  constructor(fb: FormBuilder, private usersSerivce : UsersService,
    private dialogRef: MatDialogRef<RegisterComponent>) {
    this.form = fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]]
    }
      , {});
  }

  ngOnInit(): void {
  }

  async register() {
    let newUser = new user();
    newUser.username = this.form.controls['username'].value;
    newUser.password = this.form.controls['username'].value;
    newUser.email = this.form.controls['username'].value;
    newUser.isAdmin = false; // doesn't matter

    this.failedRegistered = await this.usersSerivce.register(newUser);

    if(this.failedRegistered){
       console.log("Registered a new user.")
      this.dialogRef.close(true);
    }
  }
}
