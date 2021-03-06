import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/core/services/products.service';
import { Product } from '@app/shared/models/Product.model';
import { OrderOptionsType } from '@app/shared/models/OrderOptions.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  orderSelected: OrderOptionsType;
  searchParam: string;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
