import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Authentication/auth.guard';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CartComponent } from './Dashboard/cart/cart.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponentComponent } from './LoginComponent/login-component/login-component.component';

const routes: Routes = [{
  // Login component 
     path: 'login',
     component:LoginComponentComponent

  },
  
  {
  path: 'dashboard',
  component:DashboardComponent,
  canActivate: [AuthGuard],

},
{
  path: 'cart',
  component:CartpageComponent,
  canActivate: [AuthGuard],

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
