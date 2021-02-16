import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-help-toolbar',
  templateUrl: './help-toolbar.component.html',
  styleUrls: ['./help-toolbar.component.scss']
})
export class HelpToolbarComponent implements OnInit {

  @Output() activeToolbar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  collapseToolbar(){
    this.activeToolbar.emit("");
  }

}
