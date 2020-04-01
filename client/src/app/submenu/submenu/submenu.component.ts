import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  constructor(public usersService: UsersService, public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }


  shouldShowAdmin() {
    return this.usersService.loggedUser != null &&
      this.usersService.loggedUser.isAdmin;
  }

  register(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().toPromise().then(result => {
      console.log('The dialog was closed');
    });
  }

  login(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().toPromise().then(result => {
      console.log('The dialog was closed');
    });
  }

  disconnect() {
    this.usersService.disconnect();
  }

  conversations() {
    this.router.navigate(['conversations']);
  }

  management() {
    this.router.navigate(['management']);
  }
}
