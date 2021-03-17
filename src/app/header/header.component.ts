/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { Component, HostBinding, Input} from '@angular/core';
import { HeaderService } from './header.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	// adds padding to the top of the document, so the content is below the header
	@HostBinding('class.bx--header') headerClass = true;

	hasHamburger: boolean = true;

	@Input()
	active: boolean = false;

	title = '';
	
	public isMenuCollapsed = true;

	constructor(private headerTitleService: HeaderService) {}

ngOnInit() {
  this.headerTitleService.title.subscribe(updatedTitle => {
    this.title = updatedTitle;
  });
}

}
