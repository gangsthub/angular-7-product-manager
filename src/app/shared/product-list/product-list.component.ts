import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product.model';
import {
  trigger,
  transition,
  query,
  stagger,
  animateChild,
  style,
  animate
} from '@angular/animations';

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
  @Input() products: Product[];

  constructor() {}

  ngOnInit() {}
}
