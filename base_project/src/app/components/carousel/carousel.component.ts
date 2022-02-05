import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
