import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomersComponent,
    ListCustomersComponent
  ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
