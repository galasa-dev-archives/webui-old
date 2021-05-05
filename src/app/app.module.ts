/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
		 PaginationModule,
		 BreadcrumbModule,
		 ToggleModule,
		 DialogModule,
		 NFormsModule,
		 ButtonModule,
		 SearchModule,
		 DatePickerModule,
		 TimePickerModule,
		 SliderModule,
		 AccordionModule,
		 ModalModule
		} from 'carbon-components-angular';
		 

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
import { RunDetailComponent } from './run-page/components/run-detail/run-detail.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { TestResultComponent } from './run-page/components/run-detail/test-result/test-result.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TestFiltersToolbarComponent } from './side-navigation-bar/test-filters-toolbar/test-filters-toolbar.component';
import { OrganiseTableToolbarComponent } from './side-navigation-bar/organise-table-toolbar/organise-table-toolbar.component';
import { CompareListToolbarComponent } from './side-navigation-bar/compare-list-toolbar/compare-list-toolbar.component';
import { WorklistToolbarComponent } from './side-navigation-bar/worklist-toolbar/worklist-toolbar.component';
import { HelpToolbarComponent } from './side-navigation-bar/help-toolbar/help-toolbar.component';
import { PrevRunTestsSidebarComponent } from './side-navigation-bar/prev-run-tests-sidebar/prev-run-tests-sidebar.component';
import { DataServiceComponent } from './side-navigation-bar/data-service/data-service.component';
import { HeaderService } from './header/header.service';
import { IncreaseContrastToggleComponent } from './footer/increase-contrast-toggle/increase-contrast-toggle.component';
import { GalasaHamburgerComponent } from './header/galasa-hamburger/galasa-hamburger.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { TimeFilterComponent } from './results-page/rasfilters/time-filter/time-filter.component';
import { LoadingBarServiceComponent } from './loading-bar/loading-bar-service/loading-bar-service.component';
import { DatetimeFilterComponent } from './results-page/rasfilters/datetime-filter/datetime-filter.component';
import { LogSearchComponent } from './run-page/components/run-log/log-search/log-search.component';
import { LogRegexComponent } from './run-page/components/run-log/log-regex/log-regex.component';
import { LogScrollerComponent } from './run-page/components/run-log/log-scroller/log-scroller.component';
import { TaskViewComponent } from './run-page/components/artifact/task-view/task-view.component';
import { TreeViewComponent } from './run-page/components/artifact/tree-view/tree-view.component';
import { GalasaTabsComponent } from './run-page/components/galasa-tabs/galasa-tabs.component';
import { GalasaTabComponent } from './run-page/components/galasa-tab/galasa-tab.component';
import { InverseTestResultComponent } from './run-page/components/run-detail/inverse-test-result/inverse-test-result.component';
import { StartdateFilterComponent } from './results-page/rasfilters/startdate-filter/startdate-filter.component';
import { EnddateFilterComponent } from './results-page/rasfilters/enddate-filter/enddate-filter.component';
import { LogComponent } from './run-page/components/log/log.component';

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
		HistoryComponent,
		RunDetailComponent,
		DateTimeComponent,
		TestResultComponent,
		FooterComponent,
		BreadcrumbComponent,
		TestFiltersToolbarComponent,
		OrganiseTableToolbarComponent,
		CompareListToolbarComponent,
		WorklistToolbarComponent,
		HelpToolbarComponent,
		PrevRunTestsSidebarComponent,
		DataServiceComponent,
		IncreaseContrastToggleComponent,
		GalasaHamburgerComponent,
		LoadingBarComponent,
		TimeFilterComponent,
		LoadingBarServiceComponent,
		DatetimeFilterComponent,
		LogSearchComponent,
		LogRegexComponent,
		LogScrollerComponent,
		TaskViewComponent,
		TreeViewComponent,
		GalasaTabsComponent,
		GalasaTabComponent,
		InverseTestResultComponent,
		StartdateFilterComponent,
		EnddateFilterComponent,
		LogComponent,
		
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
		PaginationModule,
		BreadcrumbModule,
		ToggleModule,
		DialogModule,
		NFormsModule,
		ButtonModule,
		SearchModule,
		DatePickerModule,
		TimePickerModule,
		ReactiveFormsModule,
		SliderModule,
		AccordionModule,
		ModalModule
		// Notification20Module,
		// UserAvatar20Module,
		// AppSwitcher20Module
	],
	providers: [SecurityService, httpInterceptorProviders , DataServiceComponent, HeaderService, LoadingBarServiceComponent, FormBuilder],
	bootstrap: [AppComponent]
})
export class AppModule { }
