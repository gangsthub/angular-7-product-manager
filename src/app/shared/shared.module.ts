import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/modules/material/material.module';

import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FiltersToolbarComponent } from './filters-toolbar/filters-toolbar.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    FiltersToolbarComponent,
    PriceComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [ProductItemComponent, ProductListComponent, FiltersToolbarComponent]
})
export class SharedModule {}
