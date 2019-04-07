import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';

import { MatSelectChange } from '@angular/material/select';

import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import {
  OrderOptionsType,
  OrderOptionsModel
} from '../models/OrderOptions.model';

@Component({
  selector: 'app-filters-toolbar',
  templateUrl: './filters-toolbar.component.html',
  styleUrls: ['./filters-toolbar.component.css']
})
export class FiltersToolbarComponent implements OnInit, OnDestroy {
  orderOptions: OrderOptionsModel[] = [
    { type: 'title', display: 'Title' },
    { type: 'description', display: 'Description' },
    { type: 'email', display: 'E-mail' },
    { type: 'price', display: 'Price' }
  ];

  @Output() orderChange: EventEmitter<OrderOptionsType> = new EventEmitter();
  @Output() searchChange: EventEmitter<string> = new EventEmitter();

  private searchValue = new Subject();
  private searchSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.initSearchSubscription();
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  onSearchChange(value: string) {
    this.searchValue.next(value);
  }

  private initSearchSubscription() {
    this.searchSubscription = this.searchValue
      .pipe(debounceTime(400))
      .subscribe((value: string) => {
        // normally this would set up queryParams on the URL...
        this.searchChange.emit(value);
      });
  }

  emitSortingChange($event: MatSelectChange) {
    this.orderChange.emit($event.value);
  }
}
