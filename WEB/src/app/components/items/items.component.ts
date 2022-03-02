import { Component, OnInit } from '@angular/core';

// Needed for changing styles via css
import { ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { HelperServiceComponent } from '../helper-service/helper-service.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  productos: Product[] | null;

  message: string;
  editMessage: string;

  constructor(
    private helper: HelperServiceComponent,
    private _productService: ProductService
  ) {
    this.productos = null;
    this.message = '';
    this.editMessage = '';
  }

  // Con esto se 'suscribe' -> queda a la espera de que customMessage cambie en el helper, y entonces message cambiará aqui.
  ngOnInit(): void {
    this.helper.customMessage.subscribe((msg) => (this.message = msg));
    this._productService
      .getProductData()
      .subscribe((apiProducts) => (this.productos = apiProducts));

    console.log('jaja');
  }
}
