import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [CommonModule, SharedModule, FavouritesRoutingModule]
})
export class FavouritesModule {}
