import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { TableModel,TableItem, TableHeaderItem } from 'carbon-components-angular';
import { TestMethod } from 'galasa-ras-api-ts-rxjs';
import { TestResultComponent } from '../run-detail/test-result/test-result.component';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {

  @Input() testMethods : TestMethod[];

  model: TableModel = new TableModel();
  
  @ViewChild("customItemTemplate", { static : false })
  protected customItemTemplate: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
    this.model.header = [
      new TableHeaderItem({data: "Result"}),
      new TableHeaderItem({data: "Method Name"})
    ]
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.testMethods != null){
      var newData : TableItem[][] = [];
      for(let method of this.testMethods){
        newData.push([
          new TableItem({data: method.result, template: this.customItemTemplate}),
          new TableItem({data: method.methodName})
        ]);
      }
      this.model.data = newData;
    }
  }
}
