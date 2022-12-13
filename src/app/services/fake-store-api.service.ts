import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from '../models/product.model';

@Injectable()
export class FakeStoreApiService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllProducts(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  getProductLimit(limit: number): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products?limit=' + limit)
  }
}
