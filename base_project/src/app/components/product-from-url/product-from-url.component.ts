import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { PRODUCTOS } from 'src/app/utils/productos';

@Component({
  selector: 'app-product-from-url',
  templateUrl: './product-from-url.component.html',
  styleUrls: ['./product-from-url.component.css']
})
export class ProductFromUrlComponent implements OnInit {

  producto: Product | null;
  idProducto: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.producto = null;
    this.idProducto = 0;
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.idProducto = parameters.get('idProducto');
    });

    this.producto = PRODUCTOS.filter(
      (x: Product) => x.productId == this.idProducto
    )[0];
  }

}
