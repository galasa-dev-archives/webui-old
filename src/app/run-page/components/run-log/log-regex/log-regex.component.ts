import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';

@Component({
  selector: 'app-log-regex',
  templateUrl: './log-regex.component.html',
  styleUrls: ['./log-regex.component.scss']
})
export class LogRegexComponent implements OnInit {

  @Input() testStructure: TestStructure = {};
  
  ibmButton: any;
  matches: number=11;
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
    console.log(this.testStructure.runName);
  }

  onSelected(){

  }
  
  onSearch(event: any){

  }

}
