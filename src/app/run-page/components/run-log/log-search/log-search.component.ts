import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';

@Component({
  selector: 'app-log-search',
  templateUrl: './log-search.component.html',
  styleUrls: ['./log-search.component.scss']
})
export class LogSearchComponent implements OnInit {
  
  @Input() testStructure: TestStructure = {};
  @Input() runlog: string;

  ibmButton: any;
  page: number =2;
  pages: number =11;
  invalid: boolean = false;
  disabled: boolean=false;
  items = [
    		{
    		content: "One",
    		selected: false
    		},
    	{
  			content: "Two",
    		selected: false,
    	},
    	{
    		content: "Three",
    		selected: false
    		},
    		{
    			content: "four",
    			selected: false
    		}
     ];
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {

  }

  onValueChange(event: any){
    let searchString = event.toString();
    console.log("Search for: " + event);
    this.runlog = this.runlog.replace(new RegExp("<mark>", "g"), "");
    this.runlog = this.runlog.replace(new RegExp("</mark>", "g"), "")
    this.runlog = this.runlog.replace(new RegExp(event, "g"), (match) => `<mark>${match}</mark>`);
  }
}
