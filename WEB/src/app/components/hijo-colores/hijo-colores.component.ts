import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { PRODUCTOS } from 'src/app/utils/productos';

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

  productos: Product[];

  constructor() {
    this.productos = PRODUCTOS;
  }

  emitValue(num: number) {
    this.emitItemEvent.emit(num);
  }

  ngOnInit(): void {}
}
