import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { FakeStoreApiService } from '../../services/fake-store-api.service';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {PaginatorModel} from "../../models/paginator.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-paginator',
  styleUrls: ['./paginator.component.scss'],
  templateUrl: './paginator.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {
  private _paginatorSubject: BehaviorSubject<PaginatorModel> = new BehaviorSubject<PaginatorModel>({
    index: 0,
    length: 20,
    pageSize: 5
  });
  public paginator$: Observable<PaginatorModel> = this._paginatorSubject.asObservable();
  readonly productList$: Observable<ProductModel[]> = this.paginator$.pipe(switchMap(
    paginator => this._fakeStoreApiService.getAllProducts().pipe(
      map(products => products.slice(paginator.index*paginator.pageSize,paginator.index*paginator.pageSize+paginator.pageSize))
    )))

  constructor(private _fakeStoreApiService: FakeStoreApiService) {
  }

  setPaginator(event: PageEvent): void {
    this._paginatorSubject.next({
      index: event.pageIndex,
      pageSize: event.pageSize,
      length: event.length
    })
  }
}
