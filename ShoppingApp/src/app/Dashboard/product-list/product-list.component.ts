import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/Service/messenger.service';
import { ProductlistService } from 'src/app/Service/productlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:any= []
  public filterCategory : any
  searchKey:string ="";
  public searchTerm !: string;

  constructor(private productService: ProductlistService,private msg : MessengerService) { }

  ngOnInit() {
    this.loadProducts();
    
  }
  loadProducts() {
    this.productService.getProducts().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
     
     
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.msg.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }




 




  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }


  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.msg.search.next(this.searchTerm);
  }

}


  
