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

  getMsg() {
    return this.subject.asObservable()
  }


  setCartItems(items : CartItem[]){
    this.cartItems = items;
  }
  getCartItems(){
   return  this.cartItems ;
  }
  
  setTotal(total : number){
      this.Total=total;
  }

  getTotal(){
    return this.Total;
}

}
