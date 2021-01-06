import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TableModel,TableItem, TableHeaderItem } from 'carbon-components-angular';
import { TestMethod } from 'galasa-ras-api-ts-rxjs';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent implements OnInit {

  @Input() testMethods : TestMethod[];

  model: TableModel = new TableModel();
  
  constructor() { }

  ngOnInit(): void {
    this.model.header = [
      new TableHeaderItem({data: "Status"}),
      new TableHeaderItem({data: "Method Name"})
    ]
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.testMethods != null){
      var newData : TableItem[][] = [];
      for(let method of this.testMethods){
        newData.push([
          new TableItem({data: method.result}),
          new TableItem({data: method.methodName})
        ]);
      }
      this.model.data = newData;
    }
  }

}
