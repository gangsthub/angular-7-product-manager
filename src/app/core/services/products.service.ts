import { Injectable } from '@angular/core';
import { Product } from '@app/shared/models/Product.model';
import ProductsMock from '../mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  public getProducts(): Product[] {
    return ProductsMock;
  }
}
