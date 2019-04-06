import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductsService } from '@app/core/services/products.service';

type possibleHeartColors = 'accent' | 'warn';

const colorsMap = new Map([
  [true, 'warn' as possibleHeartColors],
  [false, 'accent' as possibleHeartColors]
]);

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  activatedColor: possibleHeartColors = colorsMap.get(false);
  constructor(private productsService: ProductsService) {}
  @Input() product: Product;

  ngOnInit() {
    this.activatedColor = colorsMap.get(!!this.product.favourited);
  }

  onFavourite(id: number) {
    const hasBeenAdded = this.productsService.treatEmmitedFav(id);
    this.activatedColor = colorsMap.get(!!hasBeenAdded);
  }
}
