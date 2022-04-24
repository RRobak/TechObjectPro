import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphicalModelingComponent } from '../graphical-modeling/graphical-modeling.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @ViewChild( GraphicalModelingComponent ) gmc!: GraphicalModelingComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
