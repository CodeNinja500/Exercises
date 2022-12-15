import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SearchOnButtonComponent } from './search-on-button.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatListModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  declarations: [SearchOnButtonComponent],
  providers: [],
  exports: [SearchOnButtonComponent]
})
export class SearchOnButtonComponentModule {
}
