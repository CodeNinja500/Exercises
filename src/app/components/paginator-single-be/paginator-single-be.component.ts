import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FakeStoreApiService} from '../../services/fake-store-api.service';
import {FormControl} from "@angular/forms";
import {debounceTime, Observable, of, startWith, switchMap} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-paginator-single-be',
  styleUrls: ['./paginator-single-be.component.scss'],
  templateUrl: './paginator-single-be.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorSingleBeComponent {

  readonly limit: FormControl = new FormControl(5);
  readonly pageLimits$: Observable<number[]> = of([5, 10, 15, 20]);

  readonly products$: Observable<ProductModel[]> = this.limit.valueChanges.pipe(
    startWith(5),
    switchMap(limit =>
      this._fakeStoreApiService.getProductLimit(limit)
    )
  )

  constructor(private _fakeStoreApiService: FakeStoreApiService) {
  }
}
