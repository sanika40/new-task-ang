import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private matDialog: MatDialog){}
  openDialog(){
    this.matDialog.open(UserComponent,{
      width:"850px",
      height:"500px",
      data:''
    })
  }

}
