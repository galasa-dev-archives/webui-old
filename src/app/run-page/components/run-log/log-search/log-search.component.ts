import { SelectorFlags } from '@angular/compiler/src/core';
import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-log-search',
  templateUrl: './log-search.component.html',
  styleUrls: ['./log-search.component.scss']
})
export class LogSearchComponent implements OnInit {

  @Input() testStructure: TestStructure = {};
  @Input() runlog: string;

  marks: NodeListOf<HTMLElement>;
  delay = ms => new Promise(res => setTimeout(res, ms));
  log;
  currentMark: number = 0;
  searchText: string = null;
  ibmButton: any = 'primary';
  page: number =2;
  pages: number =11;
  upDisabled: boolean = true;
  downDisabled: boolean = true;
  invalid: boolean = false;
  disabled: boolean=false;
  getMarks = async () =>{
    await this.delay(100);
    this.marks = document.querySelectorAll("mark");
    if(this.marks.length > 0){
      this.downDisabled = false;
    }
  }
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
    this.log = document.querySelector(".r6");
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  onSelected(){

  }

  onSearch($event){

  }

  onValueChange(event: any){

    this.currentMark = 0;
    this.searchText = event;
    this.getMarks(); 
  }

  onUp(){

    if(this.currentMark != 0){
      this.currentMark -= 1;
      let topOffset = this.marks[this.currentMark].offsetTop;
      this.log.scrollTop = topOffset;

      if(this.currentMark === 0){
        this.upDisabled = true;
      }
    }
  }

  onDown(){

    this.currentMark += 1;
    let topOffset = this.marks[this.currentMark].offsetTop;
    this.log.scrollTop = topOffset;
    if(this.currentMark === 1){
      this.upDisabled = false;
    }
  }

  clear(){
    this.searchText = null;
    this.upDisabled = true;
    this.downDisabled = true;
  }




}
