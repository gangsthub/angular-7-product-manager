import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ProductsService } from '../services/products.service';
import { FavouritedList } from '@app/shared/models/FavouritedList.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  favouritesCount = 0;
  favsSubscription: Subscription;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.initFavouritedProductsSubscription();
  }

  ngOnDestroy() {
    this.favsSubscription &&
      this.favsSubscription.unsubscribe &&
      this.favsSubscription.unsubscribe();
  }

  private initFavouritedProductsSubscription() {
    this.favsSubscription = this.productsService.favouritedProductsEmmiter.subscribe(
      (favs: FavouritedList) => {
        this.favouritesCount = favs.length;
      }
    );
  }
}
