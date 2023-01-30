import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../model/product'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
 //productsUrl :string =  'https://react-shopping-cart-67954.firebaseio.com/products.json';

 productUrl : string = " https://fakestoreapi.com/products/";
  constructor(private http: HttpClient) { }

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





  // product : Product[] = [
  //    { id:1,name:"Test 1",price:100,description:"A 1 fdfdfdf",imageUrl:"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSRTbtzf1Mp52cmK2-fUMECKB-XiYhEpm3cPpqskbz2YjC8mt6h8H93LFTaRb5ZiX4ZN6hM8bVH3_HtGeb4dqw"},
  //     { id:2,
  //       name:"Test 2",
  //       price:100,description:"A 1 fdfdfdf",imageUrl:"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSRTbtzf1Mp52cmK2-fUMECKB-XiYhEpm3cPpqskbz2YjC8mt6h8H93LFTaRb5ZiX4ZN6hM8bVH3_HtGeb4dqw"},
  //       { id:3,
  //         name:"Test 3",
  //         price:100,description:"A 1 fdfdfdf",imageUrl:"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSRTbtzf1Mp52cmK2-fUMECKB-XiYhEpm3cPpqskbz2YjC8mt6h8H93LFTaRb5ZiX4ZN6hM8bVH3_HtGeb4dqw"}
  //  ];
  //  getProducts(){
  //   return this.product;
  // }



  //Fetching Products from Api 
  getProducts(){
    return this.http.get<any>(this.productUrl).pipe(map((res:any)=>{
      return res;
    }))
  }
}