import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {
  
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';

  constructor() { }

  ngOnInit() {
  }

}
