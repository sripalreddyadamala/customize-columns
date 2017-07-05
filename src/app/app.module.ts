import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule, ConfirmationService, ButtonModule, InputTextModule, AutoCompleteModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoSuggestComponent } from './autosuggest/autosuggest.component';
import { Http, HttpModule } from '@angular/http';
import { AutosSuggestService } from 'app/autosuggest/autosuggest.service';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { AutoSuggestModule } from 'app/autosuggest/autosuggest.module';
import { PrinmeNgModule } from 'app/prime-ng/prime-ng.module';
import { DatePipe } from "@angular/common";
const appRoutes: Routes = [
  { path: '', component: WelcomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AutoSuggestModule,
      PrinmeNgModule,
      BrowserAnimationsModule
  ],
  providers: [ AutosSuggestService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
