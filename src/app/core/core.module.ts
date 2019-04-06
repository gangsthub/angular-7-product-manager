import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/modules/material/material.module';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}
