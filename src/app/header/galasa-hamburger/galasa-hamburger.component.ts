import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { Hamburger } from "carbon-components-angular/ui-shell";

@Component({
  selector: "galasa-hamburger",
  templateUrl:'./galasa-hamburger.component.html'
})
export class GalasaHamburgerComponent implements Hamburger {
  /**
	 * Controls the active/selected state for the `Hamburger` menu.
	 */
	@Input() active = false;

	/**
	 * `EventEmitter` to notify parent components of menu click events.
	 */
	@Output() selected: EventEmitter<Object> = new EventEmitter<Object>();

	constructor(public i18n: I18n) { }

	/**
	 * Emit the Hamburger click event upwards.
	 */
	public doClick() {
		this.selected.emit(this.active);
	}


}
