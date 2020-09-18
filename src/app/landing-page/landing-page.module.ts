/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page/landing-page.component';
import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule
} from 'carbon-components-angular';
import { LandingPageRoutingModule } from './landing-page-routing.module';

@NgModule({
	imports: [
		CommonModule,
		LandingPageRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule
	],
	declarations: [LandingPageComponent]
})
export class LandingPageModule { }
