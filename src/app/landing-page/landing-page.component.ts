/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent {
	constructor(private headerTitleService: HeaderService) {}

ngOnInit() {
  this.headerTitleService.setTitle('');
}
}
