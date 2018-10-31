import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { InputFilterComponent } from './list-customers/input-filter/input-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    InputFilterComponent
  ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
