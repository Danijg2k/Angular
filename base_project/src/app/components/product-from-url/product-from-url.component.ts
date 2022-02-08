import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-from-url',
  templateUrl: './product-from-url.component.html',
  styleUrls: ['./product-from-url.component.css']
})
export class ProductFromUrlComponent implements OnInit {

  urlData = ' ';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.urlData = parameters.get('data');
    });
  }

}
