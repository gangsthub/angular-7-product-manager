import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/core/services/products.service';
import { Product } from '@app/shared/models/Product.model';
import { OrderOptionsType } from '@app/shared/models/OrderOptions.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = this.productService
      .getProducts()
      .filter((product: Product) => product.favourited);
  }
}
