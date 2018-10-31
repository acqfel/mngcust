import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss']
})
export class InputFilterComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }
  
  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  

}
