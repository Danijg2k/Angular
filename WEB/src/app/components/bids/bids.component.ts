import { Component, OnInit } from '@angular/core';
import { Bid } from 'src/app/models/bid.model';
import { BidService } from 'src/app/services/bid.service';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css'],
})
export class BidsComponent implements OnInit {
  bids: Bid[] | null;

  constructor(private _bidService: BidService) {
    this.bids = null;
  }

  ngOnInit(): void {
    this._bidService.getBidData().subscribe((apiBids) => (this.bids = apiBids));
  }
}
