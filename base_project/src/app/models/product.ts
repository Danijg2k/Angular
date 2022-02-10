export class Product {
  productId : number;
  nombre : string | null;
  descripcion : string | null;
  precio : number | null;
  url : string | null;
  colores : string[];

  constructor(id: number, nombre: string, descripcion: string, precio: number, url: string, colores: string[]) {
    this.productId = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.url = url;
    this.colores = colores;
  }
}
