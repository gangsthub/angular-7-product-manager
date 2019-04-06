import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule]
})
export class MaterialModule {}
