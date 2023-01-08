import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartTotal: number;

  constructor() { }
  cartItems: CartItem[] = [];

  // addProductToCart(product: Product){
  //   for(let i in this.cartItems){
  //     if(this.cartItems[i].productId === product.id){
  //       this.cartItems[i].qty++
  //     }else {
  //       this.cartItems.push({
         
  //         productName: product.name,
  //         qty: 1,
  //         price: product.price,
  //         productId: product.id
  //       })
  //     }
  //   }
  //   this.cartTotal=0
  //   this.cartItems.forEach(item =>{
  //   this.cartTotal += (item.qty * item.price)
  //   })
  // }
}
