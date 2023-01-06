import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponentComponent } from './LoginComponent/login-component/login-component.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { FilterComponent } from './Dashboard/filter/filter.component';
import { ProductListComponent } from './Dashboard/product-list/product-list.component';
import { CartComponent } from './Dashboard/cart/cart.component';
import { CartItemComponent } from './Dashboard/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  ,
    ReactiveFormsModule,
    HttpClientModule ,    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
