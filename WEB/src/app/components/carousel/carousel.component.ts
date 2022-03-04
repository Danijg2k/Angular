import { Component, OnInit } from '@angular/core';

// Needed for changing styles via css to carousel
import { ViewEncapsulation } from '@angular/core';

// Trying things with carousel
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  showArrows: boolean;
  showIndicators: boolean;
  images: Array<String>;

  constructor(config: NgbCarouselConfig) {
    // Images used in carousel
    this.images = [
      'domingoRodriguez',
      'domingoRodriguez2',
      'domingoRodriguez3',
    ].map((n) => `/assets/images/${n}.jpg`);
    // Showing or not arrows for manual sliding
    this.showArrows = false;
    // Showing or not indicators of actual slide
    this.showIndicators = true;
    // Time between slide change
    config.interval = 5000;
    // Starting again after last slide
    config.wrap = true;
    // Let interact with carousel via keyboard
    config.keyboard = true;
    // Pausing sliding when hover
    config.pauseOnHover = true;
  }

  ngOnInit(): void {}
}
