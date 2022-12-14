import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { CryptoAutocompliteFeComponent } from './crypto-autocomplite-fe.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAutocompleteModule, MatOptionModule],
  declarations: [CryptoAutocompliteFeComponent],
  providers: [],
  exports: [CryptoAutocompliteFeComponent]
})
export class CryptoAutocompliteFeComponentModule {
}
