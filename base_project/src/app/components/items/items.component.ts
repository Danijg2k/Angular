import { Component, OnInit } from '@angular/core';

// Needed for changing styles via css
import { ViewEncapsulation } from '@angular/core'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
