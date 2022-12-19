import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {FormControl} from "@angular/forms";
import {Observable, combineLatest, startWith} from "rxjs";
import {ProductFullModel} from "../../models/product-full.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-autocomplite-products',
  styleUrls: ['./autocomplite-products.component.scss'],
  templateUrl: './autocomplite-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompliteProductsComponent {
  public search: FormControl = new FormControl();
  readonly productList$: Observable<ProductFullModel[]> = this._productsService.getFullProducts();

  readonly productsFiltered$: Observable<ProductFullModel[]> = combineLatest([
    this.search.valueChanges.pipe(startWith('')),
    this.productList$
  ]).pipe(map(([search, products]) => products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))));

  constructor(private _productsService: ProductsService) {
  }
}
