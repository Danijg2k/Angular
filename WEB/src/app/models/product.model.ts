export class Product {
  id: number;
  name: string | null;
  description: string | null;
  price: number | null;
  image: string | null;
  colors: string[];

  constructor() {
    this.id = 0;
    this.name = null;
    this.description = null;
    this.price = 0;
    this.image = null;
    this.colors = [];
  }
}
