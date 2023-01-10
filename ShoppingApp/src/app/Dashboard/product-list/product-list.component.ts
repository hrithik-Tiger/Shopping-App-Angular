import { Component, OnInit  } from '@angular/core';
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
  page:number=1;
  totalLength:any;
  isfetching = false;


  constructor(private productService: ProductlistService,private msg : MessengerService) { }

  ngOnInit() {
    this.loadProducts();
    
  }
  loadProducts() {
    this.isfetching=true
    this.productService.getProducts().subscribe(res=>{
      this.isfetching=false;
      this.productList = res;
      this.filterCategory = res;
        
    this.totalLength = res.length;
     
     
      console.log(this.productList)
    });

    this.msg.search.subscribe((val:any)=>{
     // this.searchKey = val;
      
   
      this.filterCategory = this.filter(val)

    })
  }





 




  filter(_filteritem:number){

    console.log("Filter item ", _filteritem)
    this.filterCategory = this.productList
    .filter((a:any)=>{
    //  console.log("A cate :" ,a)
      if( a.price < _filteritem || _filteritem == 0){
        
        
        return a;
      }
    })
    console.log("Fibnal : ", this.filterCategory)
    return this.filterCategory
  }


  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.msg.search.next(this.searchTerm);
  }

}


  
