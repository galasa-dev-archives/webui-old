import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  @Input() runlog:string;

  newLog: string;

  constructor() { }

  ngOnInit(): void {

  }

  pad(number){
    if(number <= 99999){number = ("0000" + number).slice(-5);}
    return number;
  }

  ngOnChanges(changes: SimpleChanges){
    var logArray = this.runlog.split('\n');
    var fullLog = [];
    var i = 0;
    for(let line in logArray){
      let newLine;
      newLine = this.pad(i+1) + "  " + logArray[line];
      fullLog.push(newLine);
      i++
    }
    var log = document.querySelector('#log');
    this.newLog = fullLog.join("\n"); 
    log.innerHTML = this.newLog;
  }

}
