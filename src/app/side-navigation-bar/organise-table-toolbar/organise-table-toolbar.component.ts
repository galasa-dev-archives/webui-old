import { Component, EventEmitter, Host, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-organise-table-toolbar',
  templateUrl: './organise-table-toolbar.component.html',
  styleUrls: ['./organise-table-toolbar.component.scss']
})
export class OrganiseTableToolbarComponent implements OnInit {

  @Output() activeToolbar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  collapseToolbar(){
    this.activeToolbar.emit("");
  }

}
