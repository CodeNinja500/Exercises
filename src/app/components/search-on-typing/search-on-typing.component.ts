import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, combineLatest, startWith} from 'rxjs';
import {ProductFullModel} from '../../models/product-full.model';
import {FakeStoreApiService} from '../../services/fake-store-api.service';
import {ProductsService} from '../../services/products.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-search-on-typing',
  styleUrls: ['./search-on-typing.component.scss'],
  templateUrl: './search-on-typing.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchOnTypingComponent {

  readonly productList$: Observable<ProductFullModel[]> = this._productsService.getFullProducts()
  readonly categoryList$: Observable<string[]> = this._fakeStoreApiService.getAllCategories();

  readonly search: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl('')
  });

  readonly productListFiltered: Observable<ProductFullModel[]> = combineLatest([
    this.search.valueChanges.pipe(startWith({name: '', category: ''})),
    this.productList$
  ]).pipe(map(([searchForm, products]) => products.filter(product => product.category.toLowerCase().includes(
    searchForm.category.toLowerCase()) || searchForm.category === 'All').filter(product => product.title.toLowerCase().includes(searchForm.name.toLowerCase()))));

  constructor(private _fakeStoreApiService: FakeStoreApiService, private _productsService: ProductsService) {
  }
}
