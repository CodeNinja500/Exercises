import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddingToCartComponent } from './adding-to-cart.component';

@NgModule({
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule, MatListModule, MatButtonModule, MatIconModule],
  declarations: [AddingToCartComponent],
  providers: [],
  exports: [AddingToCartComponent]
})
export class AddingToCartComponentModule {
}
