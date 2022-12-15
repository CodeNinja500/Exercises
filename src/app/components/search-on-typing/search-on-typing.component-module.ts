import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SearchOnTypingComponent } from './search-on-typing.component';

@NgModule({
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatListModule, MatSelectModule, MatOptionModule],
  declarations: [SearchOnTypingComponent],
  providers: [],
  exports: [SearchOnTypingComponent]
})
export class SearchOnTypingComponentModule {
}
