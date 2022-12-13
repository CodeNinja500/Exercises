import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-new-cart',
  styleUrls: ['./new-cart.component.scss'],
  templateUrl: './new-cart.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCartComponent {
  readonly userId$: Observable<string> = this._activatedRoute.params.pipe(map(params => params['id']))
  readonly productList$: Observable<ProductModel[]> = this._cartService.getAllProducts().pipe(tap(data => this.setFormControls(data)));

  readonly productFormArray: FormArray = new FormArray<FormGroup>([])
  readonly cartForm: FormGroup = new FormGroup({
    date: new FormControl(),
    userId: new FormControl(),
    products: this.productFormArray
  })

  constructor(private _cartService: CartService, private _activatedRoute: ActivatedRoute) {
  }

  setFormControls(products: ProductModel[]): void {
    this.userId$.subscribe(next => this.cartForm.controls['userId'].setValue(next))
    products.forEach(product => {
      let newFormGroup = new FormGroup({
        title: new FormControl(product.title),
        productId: new FormControl(product.id),
        quantity: new FormControl(1),
        added: new FormControl(false)
      });
      this.productFormArray.push(newFormGroup)
    })
  }

  onCartFormSubmitted(cartForm: FormGroup): void {
    let productMap = this.productFormArray.value.reduce((acc: { productId: number, quantity: number }[], curr: { title: string, productId: number, quantity: number, added: boolean }) => {
      if (curr.added) {
        return [...acc, {productId: curr.productId, quantity: curr.quantity}]
      } else
        return acc;

    }, []);
    this._cartService.createCart({
      userId: cartForm.value.userId,
      date: cartForm.value.date,
      products: productMap
    }).subscribe()
  }

  minusOne(id: number) {
    if (this.productFormArray.value[id].quantity > 0)
      this.productFormArray.value[id].quantity -= 1;
    if (this.productFormArray.value[id].quantity == 0)
      this.productFormArray.value[id].added = false

  }

  plusOne(id: number) {
    this.productFormArray.value[id].quantity += 1;
  }
}
