import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable, switchMap, tap} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  readonly productList$: Observable<ProductModel[]> = this._cartService.getAllProducts().pipe(tap(products => this.setProductControls(products)));

  readonly userId$: Observable<string> = this._activateRoute.params.pipe(map(params => params['id']))
  readonly cartForm: FormGroup = new FormGroup({});

  constructor(private _cartService: CartService, private _activateRoute: ActivatedRoute) {
  }

  onCartFormSubmitted(cartForm: FormGroup, products: ProductModel[]): void {
    this.userId$.subscribe(id => this._cartService.createCart({
      userId: +id,
      date: "  ",
      products: products.filter(product => cartForm.value[product.id]).map(product => {
        return{
          productId: product.id,
          quantity: 5
        }
      })
    }).subscribe())

  }

  setProductControls(products: ProductModel[]): void {
    products.forEach(product => this.cartForm.addControl(String(product.id), new FormControl(false)))
  }

}
