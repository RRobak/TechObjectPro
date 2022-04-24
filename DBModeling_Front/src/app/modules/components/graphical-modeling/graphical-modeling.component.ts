import {
  Component,
  NgModule,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  TemplateRef,
  Input,
  NgZone,
  VERSION,
} from '@angular/core';
import { DragBoxComponent } from '../drag-box/drag-box.component';
@Component({
  selector: 'app-graphical-modeling',
  templateUrl: './graphical-modeling.component.html',
  styleUrls: ['./graphical-modeling.component.scss'],
})
export class GraphicalModelingComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;
  data = 'data';
  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(DragBoxComponent);
    this.vc.createComponent(factory);
  }

  addTable() {
    const factory = this.resolver.resolveComponentFactory(DragBoxComponent);
    this.vc.createComponent(factory);
  }

  addRelation() {}
  addInheritance() {}
}
