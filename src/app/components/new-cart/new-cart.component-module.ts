import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NewCartComponent } from './new-cart.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [
    MatCardModule,
    NgIf,
    AsyncPipe,
    JsonPipe,
    NgForOf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [NewCartComponent],
  providers: [],
  exports: [NewCartComponent]
})
export class NewCartComponentModule {
}
