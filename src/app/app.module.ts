import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GittafutaService} from './gittafuta.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GittafutaComponent } from './gittafuta/gittafuta.component';

@NgModule({
  declarations: [
    AppComponent,
    GittafutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GittafutaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
