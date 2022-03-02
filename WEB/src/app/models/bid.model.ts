export class Bid {
  id: number;
  price: number | null;
  idProducto: number | null;

  constructor() {
    this.id = 0;
    this.price = 0;
    this.idProducto = 0;
  }
}
