export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  
    constructor(id, title, description, price, image ) {
      this.id = id
      this.title = title
      this.description = description
      this.price = price
      this.image = image
    }
  }