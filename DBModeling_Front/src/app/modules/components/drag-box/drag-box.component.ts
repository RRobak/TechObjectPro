import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-box',
  templateUrl: './drag-box.component.html',
  styleUrls: ['./drag-box.component.scss']
})
export class DragBoxComponent implements OnInit {
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
