import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../product.service';


@Component({
  selector: 'app-register',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(public dialogRef: MatDialogRef<UserComponent>,private router:Router, private user_service:UserService, @Inject(MAT_DIALOG_DATA) public data:any){
    console.log('data receive from profile',data)
    this.registerForm.patchValue({
      id:data.id,
      firstname  :data.firstname,
      lastname  :data.lastname ,
      email  : data.email,
      mobile  : data.mobile,
      age  : data.age,
      country  : data.country,
      state  : data.state,
      address  : data.address,
      tags  : data.tags,
      subscribe  : data.subscribe
        
    })
    this.imgPath=data.imgPath
  }
  public imgPath:any
  registerForm = new FormGroup({
    id:new FormControl(),
    imgPath : new FormControl(),
    firstname  : new FormControl("", [Validators.required]),
    lastname  : new FormControl("", [Validators.required]),
    email  : new FormControl("", [Validators.required, Validators.email]),
    mobile  : new FormControl("", [Validators.required, Validators.pattern('[0-9]{10}')]),
    age  : new FormControl(),
    country  : new FormControl(),
    state  : new FormControl(),
    address  : new FormControl(),
    tags  : new FormControl(),
    subscribe  : new FormControl()
  })

  get firstname(){
    return this.registerForm.get('firstname')
  }
  get lastname(){
    return this.registerForm.get('lastname')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get mobile(){
    return this.registerForm.get('mobile')
  }
  imageErr:any
  changeImage(event:any){
    let file = event.target.files[0]
    console.log(file)

    if(file.size < 20480){
      let imgFile = new FileReader()
      imgFile.readAsDataURL(file)

      imgFile.onload = () => {
        console.log(imgFile.result)
        this.imgPath = imgFile.result
      }
      this.imageErr=false
    }
    else{
      this.imageErr=true
    }
  }

  RegisterUser(){
    this.registerForm.patchValue({
      imgPath: this.imgPath
    })
    console.log(this.registerForm.value)
    if (this.data==''){

      this.user_service.postapi(this.registerForm.value).subscribe(()=>{ });
      console.log('Your data has been added');
      this.router.navigate(['profile',this.registerForm.value.id])
    }
    else{
      this.user_service.updateapi(this.registerForm.value,this.data.id).subscribe(()=>{ });
      console.log('Your data has been updated');
      this.router.navigate(['profile',this.data.id])

    }
  }


  closeDialog() {
    this.dialogRef.close();
  }
}
