import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable, combineLatest} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {FakeStoreApiService} from '../../services/fake-store-api.service';

@Component({
  selector: 'app-search-on-button',
  styleUrls: ['./search-on-button.component.scss'],
  templateUrl: './search-on-button.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchOnButtonComponent {
  readonly productList$: Observable<ProductModel[]> = this._fakeStoreApiService.getAllProducts();
  readonly search: FormGroup = new FormGroup({title: new FormControl()});
  private _includesSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public includes$: Observable<string> = this._includesSubject.asObservable();

  readonly productsFilteres: Observable<ProductModel[]> = combineLatest([
    this.productList$,
    this.includes$
  ]).pipe(map(([products, includes]) => products.filter(product => product.title.toLowerCase().includes(includes.toLowerCase()))
 ))

  constructor(private _fakeStoreApiService: FakeStoreApiService) {
  }

  onSearchSubmitted(search: FormGroup): void {
    if (search.value.title)
      this._includesSubject.next(search.value.title)
  }
}
