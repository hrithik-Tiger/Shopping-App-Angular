import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';

import { MessengerService } from '../Service/messenger.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cartItems :CartItem[]
 
  public grandTotal : number=0;
  cartTotal: number;



  constructor(private msg :MessengerService) { }

ngOnInit() {
 

   this.cartItems= this.msg.getCartItems()
   this.grandTotal = this.msg.getTotal()
   console.log( "Cart page data items  :  ",this.cartItems)
   console.log( "Total  :  ",this.grandTotal)
 
  }










  removeCartItem(product: CartItem){

    this.cartItems.map((a:any,index:any)=>{
      if(product.productId === a.productId){
        this.cartItems.splice(index,1);
      }
    })
  }

  removeQtyItem(product: CartItem){
    this.cartItems.map((a:any,index:any)=>{
      if(product.qty == 1){
        this.removeCartItem(product)
      }
      if(product.productId === a.productId){
        a.qty--;
      }
    })
    this.cartTotal = 0
    this.cartItems.forEach(item =>{
    this.cartTotal += (item.qty * item.price)
    this.msg.setTotal(this.cartTotal)
    console.log("cart Total : ",this.cartTotal)
    this.grandTotal = this.cartTotal
  })}

  addQtyItem(product: CartItem){
    this.cartItems.map((a:any,index:any)=>{
      if(product.productId === a.productId){
        a.qty++;
      }
    })
    this.cartTotal = 0
    this.cartItems.forEach(item =>{
    this.cartTotal += (item.qty * item.price)
    this.msg.setTotal(this.cartTotal)
    console.log("cart Total : ",this.cartTotal)
    this.grandTotal = this.cartTotal
  }

)}

}
  