/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

// carbon-components-angular default imports
import { UIShellModule, 
		 TilesModule, 
		 ComboBoxModule,
		 GridModule,
		 ListModule,
		 TabsModule, 
		 TableModule,
		 LoadingModule, 
		 PaginationModule} from 'carbon-components-angular';
		 

// import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
// import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
// import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';

import { SecurityService, httpInterceptorProviders } from './core/security.service';
import { HeaderComponent } from './header/header.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { RequestorsFilterComponent } from './results-page/rasfilters/requestors-filter/requestors-filter.component';
import { TestclassesFilterComponent } from './results-page/rasfilters/testclasses-filter/testclasses-filter.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BundleFilterComponent } from './results-page/rasfilters/bundle-filter/bundle-filter.component';
import { ResultnamesFilterComponent } from './results-page/rasfilters/resultnames-filter/resultnames-filter.component';
import { ResultsTableComponent } from './results-page/rasfilters/results-table/results-table.component';
import { RunPageComponent } from './run-page/run-page.component';
import { RunOverviewComponent } from './run-page/components/run-overview/run-overview.component';
import { MethodsComponent } from './run-page/components/methods/methods.component';
import { RunLogComponent } from './run-page/components/run-log/run-log.component';
import { ArtifactComponent } from './run-page/components/artifact/artifact.component';
import { HistoryComponent } from './run-page/components/history/history.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ResultsPageComponent,
		RequestorsFilterComponent,
		TestclassesFilterComponent,
		LandingPageComponent,
		BundleFilterComponent,
		ResultnamesFilterComponent,
		ResultsTableComponent,
		RunPageComponent,
		RunOverviewComponent,
		MethodsComponent,
		RunLogComponent,
		ArtifactComponent,
		HistoryComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		ComboBoxModule,
		HttpClientModule,
		CommonModule,
		TableModule,
		LoadingModule,
		PaginationModule
		// Notification20Module,
		// UserAvatar20Module,
		// AppSwitcher20Module
	],
	providers: [SecurityService, httpInterceptorProviders ],
	bootstrap: [AppComponent]
})
export class AppModule { }
