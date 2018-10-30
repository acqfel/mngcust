import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { InputFilterComponent } from './list-customers/input-filter/input-filter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    InputFilterComponent
  ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
