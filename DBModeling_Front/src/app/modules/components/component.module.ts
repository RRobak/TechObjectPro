import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [HeaderComponent, MainContentComponent, FooterComponent],
  imports: [CommonModule, MatButtonModule, MatListModule],
  exports: [HeaderComponent, MainContentComponent, FooterComponent],
})
export class ComponentModule {}
