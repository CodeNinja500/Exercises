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

  getProductsLimited(limit: string): Observable<ProductFullModel[]> {
    return this._httpClient.get<ProductFullModel[]>('https://fakestoreapi.com/products?limit=' + limit)
  }

  getAllCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories')
  }

  getAllInCategory(category: string): Observable<ProductFullModel[]> {
    return this._httpClient.get<ProductFullModel[]>('https://fakestoreapi.com/products/category/' + category)
  }
}
