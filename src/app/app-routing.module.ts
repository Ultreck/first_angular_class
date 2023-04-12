import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", redirectTo: "/", pathMatch:'full'},
  {path: "user", component: UserComponent},
  {path: "user/:id", component: DashboardComponent},
  {
    path: "about", 
    children:[
      {path: "profile", component: AboutComponent},
  ]
},
  {path: "**", component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
