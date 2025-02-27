import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrganizationSadies218PortraitComponent } from './components/reports/organization-sadies218-portrait/organization-sadies218-portrait.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './components/layouts/form/formularios.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    ModuleCardComponent,
    FooterComponent,
    NavbarComponent,
    OrganizationSadies218PortraitComponent,
    FormsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
