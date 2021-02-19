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
	template: `
		<button
			type="button"
			(click)="doClick()"
			[ngClass]="{'bx--header__action--active': active}"
			class="bx--header__menu-trigger bx--header__action bx--header__menu-toggle"
			[attr.aria-label]="active
				? (i18n.get('UI_SHELL.HEADER.CLOSE_MENU') | async)
				: (i18n.get('UI_SHELL.HEADER.OPEN_MENU') | async)"
			[attr.title]="active
				? (i18n.get('UI_SHELL.HEADER.CLOSE_MENU') | async)
				: (i18n.get('UI_SHELL.HEADER.OPEN_MENU') | async)">
			
      <img *ngIf="!active" src="../../assets/icons/menu-white.svg">
			<img *ngIf="active" src="../../assets/icons/close-white.svg">
		</button>
	`
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
