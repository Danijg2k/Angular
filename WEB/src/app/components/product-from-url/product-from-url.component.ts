import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-from-url',
  templateUrl: './product-from-url.component.html',
  styleUrls: ['./product-from-url.component.scss'],
})
export class ProductFromUrlComponent implements OnInit {
  producto: Product | null;
  idProducto: number;
  bid: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {
    this.producto = null;
    this.idProducto = 0;
    this.bid = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.idProducto = parameters.get('idProducto');
    });

    // this.producto = PRODUCTOS.filter(
    //   (x: Product) => x.id == this.idProducto
    // )[0];

    this._productService
      .getIdProductData(this.idProducto)
      .subscribe((apiProduct) => (this.producto = apiProduct));
  }

  changeImg(color: string) {
    if (this.producto != null) {
      this.producto.image =
        '/assets/images/items/product' +
        this.producto.id +
        '/' +
        color +
        '.jpg';
    }
  }

  guardarPuja() {}
}
