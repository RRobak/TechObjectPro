import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { DragBoxComponent } from './drag-box/drag-box.component';
import { GraphicalModelingComponent } from './graphical-modeling/graphical-modeling.component';
import { ScriptViewComponent } from './script-view/script-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    DragBoxComponent,
    GraphicalModelingComponent,
    ScriptViewComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatListModule, DragDropModule],
  exports: [HeaderComponent, MainContentComponent, FooterComponent],
})
export class ComponentModule {}
