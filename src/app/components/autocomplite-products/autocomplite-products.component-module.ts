import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AutocompliteProductsComponent } from './autocomplite-products.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAutocompleteModule, NgForOf, AsyncPipe],
  declarations: [AutocompliteProductsComponent],
  providers: [],
  exports: [AutocompliteProductsComponent]
})
export class AutocompliteProductsComponentModule {
}
