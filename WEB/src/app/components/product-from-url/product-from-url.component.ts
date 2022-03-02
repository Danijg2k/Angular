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

  bid: number;
  maxBid: number;
  bids: Bid[] | null;

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
    this.bid = 0;
    this.maxBid = 0;
    this.bids = null;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.idProducto = parameters.get('idProducto');
    });

    // this.producto = PRODUCTOS.filter(
    //   (x: Product) => x.id == this.idProducto
    // )[0];

    // this._productService
    //   .getIdProductData(this.idProducto)
    //   .subscribe((apiProduct) => (this.producto = apiProduct));

    // this._bidService.getBidData().subscribe((apiBid) => (this.bids = apiBid));
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
    this._bidService.postBidData(this.idProducto, this.bidForm.value);
    alert(
      'Has pujado ' +
        this.bidForm.value.bidPrice +
        ' € por el producto ' +
        this.idProducto
    );
  }
}
