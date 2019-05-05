import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GittafutaService} from './gittafuta.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GittafutaComponent } from './gittafuta/gittafuta.component';
import { HighlightDirective } from './highlight.directive';
import { DateCounterPipe } from './date-counter.pipe';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    GittafutaComponent,
    HighlightDirective,
    DateCounterPipe,
    RepositoryComponent
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
