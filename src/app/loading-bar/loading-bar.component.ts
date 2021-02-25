import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  width : number;
  myVar;

  constructor() { }

  ngOnInit(): void {
    this.width = 0;
    this.myVar = setInterval(() => {this.loadBar()}, 3);
  }

  loadBar(){
    console.log("Width: " + this.width);
    if (this.width >= 100){
      this.width = 0;
      document.getElementById("myProgress").style.display = "none";
      clearInterval(this.myVar);
    }
    this.width++;
    document.getElementById("myBar").style.width = this.width + "px";

  }

}
