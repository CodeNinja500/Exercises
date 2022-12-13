import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-form-controls',
  styleUrls: ['./form-controls.component.scss'],
  templateUrl: './form-controls.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlsComponent {
  readonly productList$: Observable<ProductModel[]> = this._cartService.getAllProducts().pipe(
    tap(data => this.setProductsControls(data)));

  readonly productFormArray: FormArray = new FormArray<FormGroup>([])
  readonly cartForm: FormGroup = new FormGroup({
    userId: new FormControl(1234),
    date: new FormControl(new Date()),
    products: this.productFormArray
  });

  constructor(private _cartService: CartService) {
  }

  setProductsControls(products: ProductModel[]): void {
    products.forEach(product => {
      const newGroup = new FormGroup({
        productId: new FormControl(product.id),
        title: new FormControl(product.title),
        quantity: new FormControl(1),
        value: new FormControl(false)
      })
      this.productFormArray.push(newGroup);
    })
  }

  onCartFormSubmitted(cartForm: FormGroup): void {
    const productMap = this.productFormArray.value.reduce((acc: { productId: number, quantity: number}[], curr: { productId: number, quantity: number, value: boolean }) => {
      if (curr.value) {
        return [...acc, {productId: curr.productId, quantity: curr.quantity}]
      } else {
        return acc;
      }
    }, [])
    console.log({
      userId: cartForm.value.userId,
      products: productMap,
      date: cartForm.value.date,
    })
  }
  increaseQuantity(index: number){
    this.productFormArray.value[index].quantity+=1;

  }
  decreaseQuantity(index: number){
    if(this.productFormArray.value[index].quantity>0)
    this.productFormArray.value[index].quantity-=1;
    if(this.productFormArray.value[index].quantity==0)
      this.productFormArray.value[index].value=false

  }
}


