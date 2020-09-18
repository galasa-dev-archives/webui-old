/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsPageComponent } from './results-page/results-page.component';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
	},
	{
		path: 'results',
		component: ResultsPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
