import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModule } from './modules/components/component.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragBoxComponent } from './modules/components/drag-box/drag-box.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DragBoxComponent],
})
export class AppModule {}
