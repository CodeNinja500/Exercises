import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest, of, startWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-paginator-double-fe',
  styleUrls: ['./paginator-double-fe.component.scss'],
  templateUrl: './paginator-double-fe.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorDoubleFeComponent {

  readonly pageIndex: FormControl = new FormControl(1);
  readonly length: FormControl = new FormControl(5);

  readonly pages$: Observable<number[]> = of([1, 2, 3, 4, 5]);
  readonly pageLengths$: Observable<number[]> = of([5, 10, 15, 20])

  readonly productList$: Observable<ProductModel[]> = combineLatest([
    this.pageIndex.valueChanges.pipe(startWith(1)),
    this.length.valueChanges.pipe(startWith(5)),
    this._cartService.getAllProducts()
  ]).pipe(map(([pageIndex, length, products]) => {
    return products.slice((pageIndex - 1) * length, (pageIndex - 1) * length + length)
  }));

  constructor(private _cartService: CartService) {
  }
}
