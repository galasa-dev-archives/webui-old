/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { RunPageComponent } from './run-page/run-page.component';



const routes: Routes = [
	{
		path: '',
		component: LandingPageComponent
	},
	{
		path: 'results',
		component: ResultsPageComponent
	},
	{
		path: 'run/:id',
		component: RunPageComponent
	},
	{
		path: '**',
		component: LandingPageComponent
	},
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
