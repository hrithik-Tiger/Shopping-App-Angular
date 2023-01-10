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
  constructor(private productService: ProductlistService,private msg : MessengerService ,) { }

  ngOnInit() {
    this.loadProducts();
    
  }
  loadProducts() {
    this.productService.getProducts().subscribe(res=>{
    
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

  // onTableDataChange(event:any){
  //   this.page = event;
  //   this.loadProducts();
  // }

  // onTableSizeChange(event:any):void{
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.loadProducts();
  // }



 




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
    console.log(this.searchTerm);
    this.msg.search.next(this.searchTerm);
  }

}


  
