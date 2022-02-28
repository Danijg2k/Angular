import { Component, OnInit } from '@angular/core';

// Needed for changing styles via css
import { ViewEncapsulation } from '@angular/core'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
