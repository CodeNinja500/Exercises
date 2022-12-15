import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import {BehaviorSubject, Observable, combineLatest, startWith, tap, take} from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CryptoModel } from '../../models/crypto.model';
import { CryptosService } from '../../services/cryptos.service';

@Component({
  selector: 'app-crypto-autocomplite-fe',
  styleUrls: ['./crypto-autocomplite-fe.component.scss'],
  templateUrl: './crypto-autocomplite-fe.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoAutocompliteFeComponent {
  //readonly cryptoList$: Observable<CryptoModel[]> = this._cryptosService.getAllCryptos();
  /*readonly searchForm: FormGroup = new FormGroup({
    symbol: new FormControl()
  })*/
  readonly symbol: FormControl = new FormControl()
  private _cryptoAccSubject: BehaviorSubject<string[] | undefined> = new BehaviorSubject<string[] | undefined>(undefined);
  public cryptoAcc$: Observable<string[] | undefined> = this._cryptoAccSubject.asObservable();
  /*readonly cryptoListFiltered: Observable<CryptoModel[]> = combineLatest([
    this.searchForm.valueChanges.pipe(map(form => form.symbol), startWith('')),
    this.cryptoList$
  ]).pipe(map(([include, cryptoList]) => {
    return cryptoList.filter(crypto => crypto.symbol.includes(include));
  }))*/


  readonly cryptoListFiltered: Observable<CryptoModel[]> = combineLatest([
    this.symbol.valueChanges.pipe(startWith('')),
    this._cryptosService.getAllCryptos()
  ]).pipe(map(([include, cryptoList]) => {
    return cryptoList.filter(crypto => crypto.symbol.includes(include.toUpperCase()));
  }))
  constructor(private _cryptosService: CryptosService) {
  }
  addCryptoToAcc(crypto: string): void {
    this.cryptoAcc$.pipe(take(1), tap((curr)=> {
      if(curr){
        this._cryptoAccSubject.next([...curr,crypto])
      }
      else{
        this._cryptoAccSubject.next([crypto])
      }
    })).subscribe(()=>
    this.symbol.setValue('')
    )
  }
}
