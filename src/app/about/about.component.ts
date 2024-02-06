import { Component } from '@angular/core';
import { UserService } from '../product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private prod :UserService){}

  ngOnInit(){
    this.getProductFun();
    this.prod.getuser()
  }
  productdata:any='';
  getProductFun(){
    this.prod.getuser().subscribe((data)=>{
      this.productdata =data;
    })
    
  }

}
