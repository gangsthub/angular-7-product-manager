import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];

  constructor() {}

  ngOnInit() {}
}
