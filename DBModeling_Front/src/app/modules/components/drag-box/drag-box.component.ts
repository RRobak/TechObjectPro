import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DragBoxLabelComponent } from '../drag-box-label/drag-box-label.component';

@Component({
  selector: 'app-drag-box',
  templateUrl: './drag-box.component.html',
  styleUrls: ['./drag-box.component.scss']
})
export class DragBoxComponent implements OnInit {
  @Input() data: any;
  @ViewChild('labelvc', { read: ViewContainerRef }) labelvc!: ViewContainerRef;
  
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  addLabel(){
    const factory = this.resolver.resolveComponentFactory(DragBoxLabelComponent);
    this.labelvc.createComponent(factory);
  }

}
