import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {
  
  filteredCustomers: any[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';

  constructor() { }

  ngOnInit() {
  }

}
