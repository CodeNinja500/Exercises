import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductFullModel} from '../models/product-full.model';

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getFullProducts(): Observable<ProductFullModel[]> {
    return this._httpClient.get<ProductFullModel[]>('https://fakestoreapi.com/products')
  }
}
