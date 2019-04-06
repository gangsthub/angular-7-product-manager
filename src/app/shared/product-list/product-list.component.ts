import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import {
  trigger,
  transition,
  query,
  stagger,
  animateChild,
  style,
  animate
} from '@angular/animations';

import { Product } from '../models/Product.model';
import { OrderOptionsType } from '../models/OrderOptions.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(120, animateChild()), { optional: true })
      ])
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }), // initial
        animate(
          // http://cubic-bezier.com/#.12,.47,.44,1
          '.5s cubic-bezier(.12,.47,.44,1)',
          style({ transform: 'scale(1)', opacity: 1 })
        ) // final
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() orderBy: OrderOptionsType;

  displayedProducts: Product[] = [];

  constructor() {}

  ngOnInit() {
    // shallow copy
    this.displayedProducts = [...this.products];
  }

  ngOnChanges({ orderBy }: { orderBy: SimpleChange }) {
    if (orderBy.currentValue) {
      this.changeOrder(orderBy.currentValue);
    } else if (!orderBy.currentValue && orderBy.previousValue) {
      this.resetOrder();
    }
  }

  changeOrder(type: OrderOptionsType) {
    if (!type) {
      return;
    }
    switch (type) {
      case 'title':
      case 'description':
      case 'email':
        this.displayedProducts = this.sortCollectionByStringProp(type);
        break;
      case 'price':
        this.displayedProducts = this.sortCollectionByNumberProp('price');
        break;

      default:
        break;
    }
  }

  private sortCollectionByStringProp(prop: keyof Product): Product[] {
    const productsCopy = [...this.products].sort((prev, next) => {
      if (typeof prev[prop] !== 'string') {
        return;
      }
      return (prev[prop] as string).localeCompare(next[prop] as string);
    });
    return productsCopy;
  }

  private sortCollectionByNumberProp(numberProp): Product[] {
    const productsCopy = [...this.products].sort((prev, next) => {
      if (isNaN(Number(prev[numberProp]))) {
        return;
      }
      return Number(prev[numberProp]) - Number(next[numberProp]);
    });
    return productsCopy;
  }

  private resetOrder() {
    this.displayedProducts = [...this.products];
  }
}
