import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { TemplateDrivenFormsComponent } from './pages/template-driven-forms/template-driven-forms.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { ReactiveForms2Component } from './pages/reactive-forms2/reactive-forms.component';
import { ProtegidaComponent } from './pages/protegida/protegida.component';
import { VirtualScrollComponent } from './pages/virtual-scroll/virtual-scroll.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    HomeComponent,
    PageNotFoundComponent,
    ReactiveFormsComponent,
    ReactiveForms2Component,
    ProtegidaComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
