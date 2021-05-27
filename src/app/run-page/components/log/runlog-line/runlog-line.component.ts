import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ThumbsDownComponent } from '@carbon/icons-angular';

@Component({
  selector: 'app-runlog-line',
  templateUrl: './runlog-line.component.html',
  styleUrls: ['./runlog-line.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RunlogLineComponent implements OnInit {

  @Input() line;

  element;

  @Input() searchText: string;

  constructor(el: ElementRef) { 
    this.element = el;
  }

  highlight(){
    if(!this.searchText){
      return this.line.content;
    }

    return this.line.content.replace(new RegExp(this.searchText, "gi"), match=>{
      return '<mark class="selected">' + match + '</mark>';
    })


  }

  ngOnInit(): void {
  }

}
