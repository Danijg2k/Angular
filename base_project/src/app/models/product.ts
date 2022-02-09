export class Product {
  productId : number;
  nombre : string | null;
  url : string | null;

  constructor(id: number, nombre: string, url: string) {
    this.productId = id;
    this.nombre = nombre;
    this.url = url;
  }
}
