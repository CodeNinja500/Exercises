import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable, Subject, of, startWith, take, tap} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ProductFullModel} from '../../models/product-full.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-adding-to-cart',
  styleUrls: ['./adding-to-cart.component.scss'],
  templateUrl: './adding-to-cart.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddingToCartComponent {

  public LimitControl: FormControl = new FormControl(5);


  readonly limits$: Observable<number[]> = of([5, 10, 15, 20])
  readonly productsLimited$: Observable<ProductFullModel[]> = this.LimitControl.valueChanges.pipe(
    startWith(5),
    switchMap(limit => this._productsService.getProductsLimited(limit)));

  readonly searchAndFilterForm: FormGroup = new FormGroup({
    search: new FormControl(''),
    category: new FormControl('')
  });

  private _cartSubject: BehaviorSubject<ProductFullModel[]> = new BehaviorSubject<ProductFullModel[]>([]);
  public cart$: Observable<ProductFullModel[]> = this._cartSubject.asObservable();

  constructor(private _productsService: ProductsService) {
  }

  addProductToCart(product: ProductFullModel): void {
    this.cart$.pipe(take(1), tap(cart => {
      if (cart) {
        this._cartSubject.next([...cart, product]);
      } else {
        this._cartSubject.next([product])
      }
    })).subscribe()
  }

  deleteProductFromCart(id: string): void {
    this.cart$.pipe(take(1), tap(cart => {
      if (cart) {
        this._cartSubject.next(cart.filter(item => item.id != id))
      }
    })).subscribe()
  }
}
