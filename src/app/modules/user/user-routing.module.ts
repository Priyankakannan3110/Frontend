import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHomepageComponent } from './components/user-homepage/user-homepage.component';

const routes: Routes = [
  {path:'',component:UserDashboardComponent,children: [
    {path:'home',component:UserHomepageComponent},
    {path:'',redirectTo:'/user/home',pathMatch:'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
