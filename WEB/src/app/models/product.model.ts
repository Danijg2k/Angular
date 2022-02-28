export class Product {
  productId: number;
  nombre: string | null;
  descripcion: string | null;
  precio: number | null;
  url: string | null;
  colores: string[];

  constructor() {
    this.productId = 0;
    this.nombre = null;
    this.descripcion = null;
    this.precio = 0;
    this.url = null;
    this.colores = [];
  }
}
