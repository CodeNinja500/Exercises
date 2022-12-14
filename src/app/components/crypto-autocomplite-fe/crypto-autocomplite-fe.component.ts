import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, combineLatest, startWith} from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptosService } from '../../services/cryptos.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-crypto-autocomplite-fe',
  styleUrls: ['./crypto-autocomplite-fe.component.scss'],
  templateUrl: './crypto-autocomplite-fe.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoAutocompliteFeComponent {
  readonly cryptoList$: Observable<CryptoModel[]> = this._cryptosService.getAllCryptos();
  readonly searchForm: FormGroup = new FormGroup({
    symbol: new FormControl()
  })

  readonly cryptoListFiltered: Observable<CryptoModel[]> = combineLatest([
    this.searchForm.valueChanges.pipe(map(form => form.symbol),startWith('')),
    this.cryptoList$
  ]).pipe(map(([include, cryptoList])=>{
    return cryptoList.filter(crypto => crypto.symbol.includes(include));
  }))

  constructor(private _cryptosService: CryptosService) {
  }
}
