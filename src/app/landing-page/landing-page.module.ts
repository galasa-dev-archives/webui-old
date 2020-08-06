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
import { DashboardBoxComponent } from './dashboard-box/dashboard-box.component';

@NgModule({
	imports: [
		CommonModule,
		LandingPageRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule
	],
	declarations: [LandingPageComponent, DashboardBoxComponent]
})
export class LandingPageModule { }
