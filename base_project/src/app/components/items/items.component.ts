import { Component, OnInit } from '@angular/core';

// Needed for changing styles via css
import { ViewEncapsulation } from '@angular/core'
import { Product } from 'src/app/models/product';
import { PRODUCTOS } from 'src/app/utils/productos';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  productos: Product[];

  constructor() {
    this.productos = PRODUCTOS;
  }

  ngOnInit(): void {
  }



}
