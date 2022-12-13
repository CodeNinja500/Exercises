import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from '../models/product.model';
import {CartModel} from '../models/cart.model';

@Injectable()
export class CartService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllProducts(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  createCart(cart: CartModel): Observable<CartModel> {
    return this._httpClient.post<CartModel>('https://fakestoreapi.com/carts', cart);
  }
}
