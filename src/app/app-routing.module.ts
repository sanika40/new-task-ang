import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

    // default routing
    {
      path:"",component:HomeComponent
    },
    {
      path:"user",component:UserComponent
    },
    {
      path:"profile/:id",
      component:ProfileComponent
    },
    {
      path:"footer",component:FooterComponent
    },
    {
      path:"about",component:AboutComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
