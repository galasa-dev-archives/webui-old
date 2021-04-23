import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalasaTabsComponent } from '../galasa-tabs/galasa-tabs.component';

@Component({
  selector: 'app-galasa-tab',
  templateUrl: './galasa-tab.component.html',
  styleUrls: ['./galasa-tab.component.scss']
})
export class GalasaTabComponent {

  @Input('tabTitle') title: string;
  @Input() active = false;
  @Output() selected: EventEmitter<void> = new EventEmitter<void>();

  doSelect() {
		this.selected.emit();
	}

}
