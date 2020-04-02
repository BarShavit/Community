import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-warn-dialog',
  templateUrl: './warn-dialog.component.html',
  styleUrls: ['./warn-dialog.component.css']
})
export class WarnDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<WarnDialogComponent>) { }

  ngOnInit(): void {
  }

  ok(){
    this.dialogRef.close(true);
  }

  cancel(){
    this.dialogRef.close(false);
  }
}
