import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increase-contrast-toggle',
  templateUrl: './increase-contrast-toggle.component.html',
  styleUrls: ['./increase-contrast-toggle.component.scss']
})
export class IncreaseContrastToggleComponent implements OnInit {

  onText : string = "";
  offText : string = "";
  checked : Boolean = false;
  disabled : Boolean = false;
  size : string = "sm";

  constructor() { }

  ngOnInit(): void {
  }

}
