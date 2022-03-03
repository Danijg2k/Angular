import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgModel, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Bid } from 'src/app/models/bid.model';
import { Product } from 'src/app/models/product.model';
import { BidService } from 'src/app/services/bid.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-from-url',
  templateUrl: './product-from-url.component.html',
  styleUrls: ['./product-from-url.component.scss'],
})
export class ProductFromUrlComponent implements OnInit {
  producto: Product | null;
  idProducto: number;

  maxBid: number | null;
  bids: Bid[] | null;

  frase: string;

  bidForm = this.fb.group({
    bidPrice: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private _bidService: BidService
  ) {
    this.producto = null;
    this.idProducto = 0;
    this.maxBid = 0;
    this.bids = null;
    this.frase = '';
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

    this._bidService
      .getProductBidData(this.idProducto)
      .subscribe((apiBid) => (this.bids = apiBid) && this.updateMax());
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

  guardarPuja() {
    if (this.bidForm.value.bidPrice == '') {
      this.frase = 'Introduce un valor en el input.';
      // alert('Introduce un valor en el input.');
      return;
    }
    if (this.maxBid != null) {
      if (this.bidForm.value.bidPrice < this.maxBid) {
        this.frase = 'Cantidad mínima debe ser: ' + this.maxBid + '€.';
        // alert('La cantidad mínima a introducir es: ' + this.maxBid);
        return;
      }
      alert('Has pujado por ' + this.bidForm.value + '€.');
      this._bidService.postBidData(this.idProducto, this.bidForm.value);
      // Recargamos la página
      window.location.reload();
    }
  }

  updateMax() {
    if (this.bids != null) {
      this.bids.forEach((element) => {
        if (
          element.price != null &&
          this.maxBid != null &&
          element.price > this.maxBid
        ) {
          this.maxBid = element.price;
        }
      });
    }
  }
}
