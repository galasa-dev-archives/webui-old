import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
	},
	{
		path: 'results',
		loadChildren: () => import('./results-page/results-page.component').then(m => m.ResultsPageComponent)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
