import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject()
  constructor() { }

  cartItems :CartItem[]
  Total :number=0;
  public search = new BehaviorSubject<string>("");
  

  sendMsg(product) {
    this.subject.next(product) //Triggering an event
  
  }

  //Observing data trigered from subject
  getMsg() {
    return this.subject.asObservable()
  }

//setting cart Items values
  setCartItems(items : CartItem[]){
    this.cartItems = items;
  }

  //Returning Cart Items
  getCartItems(){
   return  this.cartItems ;
  }
  
 //Setting Total  
  setTotal(total : number){
      this.Total=total;
  }


 //getting Total 
  getTotal(){
    return this.Total;
}

}
