import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { MessengerService } from 'src/app/Service/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : CartItem[]=[]
 // cartItems:Array[] = [
  //  { id:1,
  //   qty: 4,
  //   productName:"Test 1",
  //   price:100},
  //   { id:1,
  //     qty: 4,
  //     productName:"Test 1",
  //     price:100},
  //     { id:1,
  //       qty: 4,
  //       productName:"Test 1",
  //       price:100}
 // ];
cartTotal =0
  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product)=>{
      this.addProductToCart(product)
    })
    
       
    
 
    
  }

//To add product To cart 
  addProductToCart(product: Product){
   //To check if product Exists
    let productExist=false;
   
   //It iterate ech item to get the quatity so that every item is not repeaded in list 

    for(let i in this.cartItems){
      
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].qty++
        productExist =true;
        this.msg.setCartItems(this.cartItems)
        break;
      }
    } 

    //if product exit is not true then it will add 
        if(!productExist){
          console.log("Product : ",product.title)   
         
        this.cartItems.push({
          productId: product.id,
          productName: product.title,
          qty: 1,
          price: product.price,
          image:product.image
        })
      }
    
  
     this.cartTotal = 0
    this.cartItems.forEach(item =>{
    this.cartTotal += (item.qty * item.price)
    this.msg.setTotal(this.cartTotal)
   
    this.msg.setCartItems(this.cartItems)
    })
  }


  
}


