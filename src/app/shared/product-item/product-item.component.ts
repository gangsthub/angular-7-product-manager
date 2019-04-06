import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductsService } from '@app/core/services/products.service';

type possibleHeartColors = 'primary' | 'warn';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  activatedColor: possibleHeartColors = 'primary';
  constructor(private productsService: ProductsService) {}
  @Input() product: Product;

  ngOnInit() {}

  onFavourite(id: number) {
    const hasBeenAdded = this.productsService.treatEmmitedFav(id);
    this.activatedColor = hasBeenAdded ? 'warn' : 'primary';
  }
}
