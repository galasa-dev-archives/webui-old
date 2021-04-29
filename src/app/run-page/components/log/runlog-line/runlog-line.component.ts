import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-runlog-line',
  templateUrl: './runlog-line.component.html',
  styleUrls: ['./runlog-line.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RunlogLineComponent implements OnInit {

  @Input() line;

  @Input() set searchText(input: string){
    this.line.content = this.line.content.replace(new RegExp('<mark>', "g"), "");
    this.line.content = this.line.content.replace(new RegExp("</mark>", "g"), "");
    this.line.content = this.line.content.replace(new RegExp(input, "g"), (match) => `<mark>${match}</mark>`);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
