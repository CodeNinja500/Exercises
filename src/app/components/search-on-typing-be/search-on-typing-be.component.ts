import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {debounceTime, Observable, startWith, switchMap} from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import {ProductFullModel} from "../../models/product-full.model";
@Component({
  selector: 'app-search-on-typing-be',
  styleUrls: ['./search-on-typing-be.component.scss'],
  templateUrl: './search-on-typing-be.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchOnTypingBeComponent {
  readonly search: FormGroup = new FormGroup({ name: new FormControl('') });
  readonly startWith$: Observable<string> = this.search.valueChanges.pipe(
    startWith({name: ''}),
    debounceTime(1000),
    map(form => form.name));

  readonly productsFiltered$ : Observable<ProductFullModel[]> = this.startWith$.pipe(
    switchMap(startWithText => this._productsService.getFullProducts().pipe(
      map(products => products.filter(
        product => product.title.toLowerCase().startsWith(startWithText.toLowerCase()))
    ))
  ));

  constructor(private _productsService: ProductsService) {
  }

}
