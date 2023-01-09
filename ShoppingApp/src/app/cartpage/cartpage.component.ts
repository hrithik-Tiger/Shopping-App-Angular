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



  constructor(private msg :MessengerService) { }

ngOnInit() {
  // this.msg.getMsg().subscribe((product: Product)=>{
  //   this.addProductToCart(product)
  // })


   this.cartItems= this.msg.getCartItems()
   this.grandTotal = this.msg.getTotal()
   console.log( "Cart page data items  :  ",this.cartItems)
   console.log( "Total  :  ",this.grandTotal)
   
  // this.cartService.getProducts().subscribe((res: any)=>{
  //   this.grandTotal = this.cartService.getTotalPrice();
  //   this.addProductToCart(res)
  // })
  }









// //To add product To cart 
//   addProductToCart(product: Product){
//    //To check if product Exists
//     let productExist=false;
   
//    //It iterate ech item to get the quatity so that every item is not repeaded in list 

//     for(let i in this.cartItems){
      
//       if(this.cartItems[i].productId === product.id){
//         this.cartItems[i].qty++
//         productExist =true;
//         break;
//       }
//     } 

//     //if product exit is not true then it will add 
//         if(!productExist){
//         this.cartItems.push({
//           productId: product.id,
//           productName: product.name,
//           qty: 1,
//           price: product.price,
         
//         })
//       }
    
  
//      this.grandTotal = 0
//     this.cartItems.forEach(item =>{
//     this.grandTotal += (item.qty * item.price)

//     })
//   }


  removeCartItem(product: CartItem){

    this.cartItems.map((a:any,index:any)=>{
      if(product.productId === a.productId){
        this.cartItems.splice(index,1);
      }
    })
  }
}

