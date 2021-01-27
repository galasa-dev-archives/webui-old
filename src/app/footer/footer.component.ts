import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  onText : string = "Increase contrast";
  offText : string = "Increase contrast";
  checked : Boolean = false;
  disabled : Boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
