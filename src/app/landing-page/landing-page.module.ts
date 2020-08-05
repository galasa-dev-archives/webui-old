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
import { DashboardBoxesComponent } from './dashboard-boxes/dashboard-boxes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		LandingPageRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule
	],
	declarations: [LandingPageComponent, DashboardBoxesComponent, DashboardComponent]
})
export class LandingPageModule { }
