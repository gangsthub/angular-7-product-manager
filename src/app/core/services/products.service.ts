import { Injectable, EventEmitter, Output } from '@angular/core';
import { Product } from '@app/shared/models/Product.model';
import productsMock from '../mocks/products.mock';
import { FavouritedList } from '@app/shared/models/FavouritedList.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  // storing their "ids" (property added to mocked collection)
  favouritedProducts: FavouritedList = [];

  @Output() favouritedProductsEmmiter: EventEmitter<
    FavouritedList
  > = new EventEmitter();

  public getProducts(): Product[] {
    return productsMock.reduce((accumulated: Product[], product: Product) => {
      return [
        ...accumulated,
        ...[
          this.favouritedProducts.indexOf(product.id) > -1
            ? { ...product, favourited: true }
            : { ...product }
        ]
      ];
    }, []);
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
