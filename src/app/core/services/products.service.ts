import { Injectable } from '@angular/core';

const products = () => import('../mocks/products.mock');

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  public async getProducts() {
    return await products();
  }
}
