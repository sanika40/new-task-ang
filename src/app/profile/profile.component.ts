import { UserService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId:any
  profile:any
  constructor(private matDialog: MatDialog,private activatedroute:ActivatedRoute,private userservice:UserService){
    this.activatedroute.params.subscribe((params: Params) => this.userId = params['id']);

  }
  openDialog(){
    this.matDialog.open(UserComponent,{
      width:"850px",
      height:"500px",
      data:this.profile
    })
  }
  ngOnInit(): void {
    this.userservice.getuserbyid(this.userId).subscribe((Response)=>{
      this.profile =Response
      console.log(this.profile);
      this.imgPath=this.profile.imgPath

    })

  }
  imgPath:any
  changeImage(event:any){
    let file = event.target.files[0]
    console.log(file)


      let imgFile = new FileReader()
      imgFile.readAsDataURL(file)
      imgFile.onload = () => {
        console.log(imgFile.result)
        this.imgPath = imgFile.result
      }
  }

  edit_photo_func(){
    this.profile.imgPath=this.imgPath
    this.userservice.updateapi(this.profile,this.userId).subscribe(()=>{

    })

  }

}
