import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MatSelectChange } from '@angular/material/select';

import {
  OrderOptionsType,
  OrderOptionsModel
} from '../models/OrderOptions.model';

@Component({
  selector: 'app-filters-toolbar',
  templateUrl: './filters-toolbar.component.html',
  styleUrls: ['./filters-toolbar.component.css']
})
export class FiltersToolbarComponent implements OnInit {
  orderOptions: OrderOptionsModel[] = [
    { type: 'title', display: 'Title' },
    { type: 'description', display: 'Description' },
    { type: 'email', display: 'E-mail' },
    { type: 'price', display: 'Price' }
  ];

  @Output() orderChange: EventEmitter<OrderOptionsType> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitChange($event: MatSelectChange) {
    // console.log($event.value);
    this.orderChange.emit($event.value);
  }
}
