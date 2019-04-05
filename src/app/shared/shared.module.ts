import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '@app/modules/material/material.module';

@NgModule({
  declarations: [ProductItemComponent, ProductListComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ProductItemComponent, ProductListComponent]
})
export class SharedModule {}
