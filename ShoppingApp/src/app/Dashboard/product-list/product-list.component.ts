import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductlistService } from 'src/app/Service/productlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []
  constructor(private productService: ProductlistService) { }

  ngOnInit() {
    this.loadProducts();
    
  }
  loadProducts() {
    this.productList = this.productService.getProducts()
  }
  // loadProducts() {
  //   this.productService.getProducts().subscribe((products) => {
  //     this.productList = products;
  //   })
  // }
}
