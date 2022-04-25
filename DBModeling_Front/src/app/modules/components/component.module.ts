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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { DragBoxLabelComponent } from './drag-box-label/drag-box-label.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    DragBoxComponent,
    GraphicalModelingComponent,
    ScriptViewComponent,
    DragBoxLabelComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    DragDropModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  exports: [HeaderComponent, MainContentComponent, FooterComponent],
})
export class ComponentModule {}
