export class Product {
  nombre : string | null;
  url : string | null;

  constructor(nombre: string, url: string) {
    this.nombre = nombre;
    this.url = url;
  }
}
