import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { GalasaTabComponent } from '../galasa-tab/galasa-tab.component';

@Component({
  selector: 'app-galasa-tabs',
  templateUrl: './galasa-tabs.component.html',
  styleUrls: ['./galasa-tabs.component.scss']
})
export class GalasaTabsComponent implements AfterContentInit {
  
  @ContentChildren(GalasaTabComponent) tabs: QueryList<GalasaTabComponent>;
  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  
  selectTab(tab: GalasaTabComponent){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;
  }
  
}
