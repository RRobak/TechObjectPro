import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  typesOfShoes: string[] = ['Nowa tabela', 'Nowa relacja','Dziedziczenie'];
  constructor() { }

  ngOnInit(): void {
  }

}
