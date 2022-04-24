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
  // @ViewChild(TemplateRef, { read: ViewContainerRef })target!: ViewContainerRef;
  addElement() {
    const factory = this.resolver.resolveComponentFactory(DragBoxComponent);
    this.vc.createComponent(factory);
    // const adItem = DragBoxComponent;
    // // this.viewContainerRef.clear();
    // const componentRef = this.viewContainerRef.createComponent<DragBoxComponent>(adItem);
    // componentRef.instance.data = this.data;
    // if(this.viewContainerRef.length>2){
    // this.viewContainerRef.remove(2);}
    // this.componentRef = this.target.createComponent(childComponent);
    // const componentRef  = this.viewContainerRef.createComponent(DragBoxComponent);
  }
}
