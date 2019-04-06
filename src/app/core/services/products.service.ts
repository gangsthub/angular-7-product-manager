import { Injectable, EventEmitter, Output } from '@angular/core';
import { Product } from '@app/shared/models/Product.model';
import ProductsMock from '../mocks/products.mock';
import { FavouritedList } from '@app/shared/models/FavouritedList.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  favouritedProducts: FavouritedList = [];

  @Output() favouritedProductsEmmiter: EventEmitter<
    FavouritedList
  > = new EventEmitter();

  public getProducts(): Product[] {
    return ProductsMock;
  }

  /**
   * Handle favourites change
   * @param id id to store or delete from store
   * @returns empty string or string with id
   */
  public treatEmmitedFav(id: number): string {
    const idSearchIndex = this.favouritedProducts.indexOf(id);
    if (idSearchIndex > -1) {
      this.deleteFav(idSearchIndex);
      return '';
    }
    this.addFav(id);
    return '' + id;
  }

  private deleteFav(indexOnArray: number) {
    this.favouritedProducts.splice(indexOnArray, 1);
    this.favouritedProductsEmmiter.emit(this.favouritedProducts);
  }

  private addFav(id: number) {
    this.favouritedProducts = Array.from(
      new Set([...this.favouritedProducts, id])
    );
    this.favouritedProductsEmmiter.emit(this.favouritedProducts);
  }
}
