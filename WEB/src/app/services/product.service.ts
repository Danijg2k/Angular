import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductData(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.API_URL + 'products');
  }

  getIdProductData(id: number): Observable<Product> {
    return this.http.get<Product>(environment.API_URL + 'products/' + id);
  }

  postProductData(body: any): Product {
    let bodyData = new Product();
    bodyData.name = body.name;
    bodyData.description = body.description;
    bodyData.image = body.image;

    let result = new Product();
    this.http
      .post<Product>(environment.API_URL + 'products', bodyData)
      .subscribe(
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
