import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatButtonModule, MatCheckboxModule, CommonModule],
  declarations: [CartComponent],
  providers: [],
  exports: [CartComponent]
})
export class CartComponentModule {
}
