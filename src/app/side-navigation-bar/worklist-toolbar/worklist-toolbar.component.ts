import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-worklist-toolbar',
  templateUrl: './worklist-toolbar.component.html',
  styleUrls: ['./worklist-toolbar.component.scss']
})
export class WorklistToolbarComponent implements OnInit {

  @Output() activeToolbar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  collapseToolbar(){
    this.activeToolbar.emit("");
  }

}
