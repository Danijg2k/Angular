import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bid } from '../models/bid.model';

@Injectable()
export class BidService {
  constructor(private http: HttpClient) {}

  // Get all
  getBidData(): Observable<Bid[]> {
    return this.http.get<Bid[]>(environment.API_URL + 'bids');
  }

  // Get by Id
  getIdBidData(id: number): Observable<Bid> {
    return this.http.get<Bid>(environment.API_URL + 'bids/' + id);
  }

  // Get all del producto actual
  getProductBidData(id: number): Observable<Bid[]> {
    return this.http.get<Bid[]>(environment.API_URL + 'bids/product' + id);
  }

  getMaxBid(): Observable<Bid[]> {
    return this.http.get<Bid[]>(environment.API_URL + 'bids');
  }

  postBidData(productId: number, body: any): Bid {
    let bodyData = new Bid();
    bodyData.price = body.bidPrice;
    bodyData.idProducto = productId;

    let result = new Bid();
    this.http.post<Bid>(environment.API_URL + 'bids', bodyData).subscribe(
      (response) => {
        console.log('response received');
        result = response;
      },
      (error) => {
        console.error('error caught in component');
      }
    );
    return result;
  }
}
