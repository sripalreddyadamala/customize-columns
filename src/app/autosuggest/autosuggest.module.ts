import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutosSuggestService } from 'app/autosuggest/autosuggest.service';
import { AutoSuggestComponent } from 'app/autosuggest/autosuggest.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from 'app/search/search.component';
import { ValidationService } from 'app/autosuggest/autosuggest.Validation.service ';
import { PrinmeNgModule } from 'app/prime-ng/prime-ng.module';
import { SearchFormBuilderService } from 'app/autosuggest/autosuggest.formbuilder.service';
import { WelcomeComponent } from 'app/welcome/welcome.component';


 const searchRoutes: Routes = [
  { path: 'search',      component: SearchComponent }];

@NgModule({
  imports: [
     RouterModule.forChild(searchRoutes),
       ReactiveFormsModule,
       FormsModule,
       CommonModule,
       PrinmeNgModule
  ],
  providers: [AutosSuggestService, ValidationService, SearchFormBuilderService],
  declarations: [AutoSuggestComponent, SearchComponent]
})
export class AutoSuggestModule { }
