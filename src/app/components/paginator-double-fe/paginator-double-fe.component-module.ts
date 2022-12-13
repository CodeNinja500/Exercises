import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PaginatorDoubleFeComponent } from './paginator-double-fe.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, MatOptionModule],
  declarations: [PaginatorDoubleFeComponent],
  providers: [],
  exports: [PaginatorDoubleFeComponent]
})
export class PaginatorDoubleFeComponentModule {
}
