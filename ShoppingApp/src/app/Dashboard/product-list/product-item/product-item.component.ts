import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

import { MessengerService } from 'src/app/Service/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 
 @Input() productItem: Product
 
  constructor( private msg : MessengerService) { }

  ngOnInit() {
  }
  handleAddToCart() {
    
      this.msg.sendMsg(this.productItem)
      
  }
 
}
