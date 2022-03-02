import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-hijo-colores',
  templateUrl: './hijo-colores.component.html',
  styleUrls: ['./hijo-colores.component.css'],
})
export class HijoColoresComponent implements OnInit {
  // En item guardamos el nombre del producto que escriban en el padre (PADRE A HIJO)
  @Input() item = '';

  // HIJO A PADRE
  @Output() emitItemEvent = new EventEmitter<number>();

  productos: Product[] | null;

  constructor(private _productService: ProductService) {
    this.productos = null;
  }

  emitValue(num: number) {
    this.emitItemEvent.emit(num);
  }

  ngOnInit(): void {
    this._productService
      .getProductData()
      .subscribe((apiProducts) => (this.productos = apiProducts));
  }
}
