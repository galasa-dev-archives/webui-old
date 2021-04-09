import { Component, OnInit } from '@angular/core';
import { Tab } from "carbon-components-angular/tabs";

@Component({
  selector: 'app-galasa-tab',
  templateUrl: './galasa-tab.component.html',
  styleUrls: ['./galasa-tab.component.scss']
})
export class GalasaTabComponent extends Tab implements OnInit{

    ngOnInit(){
      super.ngOnInit();
    }

}
