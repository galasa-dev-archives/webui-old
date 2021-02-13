import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-compare-list-toolbar',
  templateUrl: './compare-list-toolbar.component.html',
  styleUrls: ['./compare-list-toolbar.component.scss']
})
export class CompareListToolbarComponent implements OnInit {

  @Output() activeToolbar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  collapseToolbar(){
    this.activeToolbar.emit("");
  }

}
