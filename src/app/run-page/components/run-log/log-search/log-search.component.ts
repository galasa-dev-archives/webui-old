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
  page: number = 0;
  pages: number = 0;
  upDisabled: boolean = true;
  downDisabled: boolean = true;
  invalid: boolean = false;
  disabled: boolean=false;
  showAll: boolean=false;

  getMarks = async () =>{
    await this.delay(50);
    this.marks = document.querySelectorAll("mark");
    
    if(this.marks.length > 0){
      if(this.showAll !== true){
        this.marks[0].classList.add("selected");
      }else{
        this.marks.forEach(e => {
          e.classList.add("selected");
        })
      }

      this.downDisabled = false;
      this.pages = this.marks.length;
      this.page = 1;
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

      if(this.showAll == false){
        this.marks[this.currentMark].classList.remove("selected");
        this.marks[this.currentMark - 1].classList.add("selected");
      }

      this.currentMark -= 1;
      this.page = this.currentMark + 1;
      
      let topOffset = this.marks[this.currentMark].offsetTop - 300;
      this.log.scrollTop = topOffset;

      if(this.currentMark === 0){
        this.upDisabled = true;
      }
    }
  }

  onDown(){

    if(this.currentMark + 1 != this.marks.length){

      if(this.showAll == false){
        this.marks[this.currentMark].classList.remove("selected");
        this.marks[this.currentMark + 1].classList.add("selected");
      }

      this.currentMark += 1;
      this.page = this.currentMark + 1;
      let topOffset = this.marks[this.currentMark].offsetTop;
      this.log.scrollTop = topOffset - 300;
      if(this.currentMark === 1){
        this.upDisabled = false;
      }

    }
  }

  clear(){
    this.searchText = null;
    this.upDisabled = true;
    this.downDisabled = true;
  }

  onShowAllChange(event:any){
    
      if(event.checked === true){
        this.showAll = true;
        if(this.marks != null){
          this.marks.forEach(e => {
            e.classList.add("selected");
          });
      }
      }else{
        this.showAll = false;
        if(this.marks != null){
        for(let i = 1; i < this.marks.length; i++){
          this.marks[i].classList.remove("selected");
        }
      }
      }

  }




}
