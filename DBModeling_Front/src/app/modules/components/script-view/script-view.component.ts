import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-script-view',
  templateUrl: './script-view.component.html',
  styleUrls: ['./script-view.component.scss'],
})
export class ScriptViewComponent implements OnInit {
  constructor() {}
  script='Tutaj pojawi się skrypt bazy danych';
  ngOnInit(): void {

  }
}
