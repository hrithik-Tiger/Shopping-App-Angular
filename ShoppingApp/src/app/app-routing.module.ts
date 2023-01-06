import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponentComponent } from './LoginComponent/login-component/login-component.component';

const routes: Routes = [{
  // Login component 
     path: 'login',
     component:LoginComponentComponent

  },
  
  {
  path: 'dashboard',
  component:DashboardComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
