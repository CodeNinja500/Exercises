import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PaginatorComponent } from './paginator.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatPaginatorModule],
  declarations: [PaginatorComponent],
  providers: [],
  exports: [PaginatorComponent]
})
export class PaginatorComponentModule {
}
