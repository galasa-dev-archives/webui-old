import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { UIShellModule, TilesModule, ComboBoxModule } from 'carbon-components-angular';
// import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
// import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
// import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';
import { HeaderComponent } from './header/header.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { RequestorsFilterComponent } from './results-page/rasfilters/requestors-filter/requestors-filter.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ResultsPageComponent,
		RequestorsFilterComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		TilesModule,
		ComboBoxModule
		// Notification20Module,
		// UserAvatar20Module,
		// AppSwitcher20Module
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
