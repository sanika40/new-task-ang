import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';



let material=[
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ], 
  exports:[
    material
  ]
})
export class MaterialModule { }
