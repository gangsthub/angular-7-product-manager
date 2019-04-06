import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FavouritedList } from '@app/shared/models/FavouritedList.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  favouritesCount = 0;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.initFavouritedProductsSubscription();
  }

  private initFavouritedProductsSubscription() {
    this.productsService.favouritedProductsEmmiter.subscribe(
      (favs: FavouritedList) => {
        this.favouritesCount = favs.length;
      }
    );
  }
}
