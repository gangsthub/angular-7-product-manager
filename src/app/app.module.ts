import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { ProductsService } from './core/services/products.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    HomeRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

registerLocaleData(localeEs, 'es');
