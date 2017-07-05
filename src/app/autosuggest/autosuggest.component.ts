import { Component, OnInit } from '@angular/core';
import { AutosSuggestService } from 'app/autosuggest/autosuggest.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { AutoSuggest } from 'app/autosuggest/autosuggest';
import { ValidationService } from 'app/autosuggest/autosuggest.Validation.service ';
import { SearchFormBuilderService } from 'app/autosuggest/autosuggest.formbuilder.service';
import { DatePipe } from "@angular/common";
import { ISubData } from "app/autosuggest/ISubData";
@Component({
  selector: 'app-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.css']
})
export class AutoSuggestComponent implements OnInit {
  datepipe: any;
  searchForm: FormGroup;
  results: string[];
  autoSuggest: AutoSuggest;
  text: string;
  date: Date;
  textExecutionVenue: string;
  setDob: string;
  ErrorMessages: string[]
  ErrorMessagesExecutionVenue: string[]
  subData: ISubData[]

  //Default columns
  DefaultColumns: any[];
  //Columns can be added
  OptionalColumns: any[];
  constructor(private typeaheadServiceService: AutosSuggestService, private searchFormBuilderService: SearchFormBuilderService) { }
  ngOnInit() {
    this.searchForm = this.searchFormBuilderService.BuidFormControls();
    this.typeaheadServiceService.getSubdata().subscribe(w => {
      this.subData = w;
    });
    this.typeaheadServiceService.getDefaultColumns().subscribe(w => {
      this.DefaultColumns = w.filter(q => !q.optional);
      this.OptionalColumns = w.filter(q => q.optional);
    })
  }
  addToShowColumns(item, event) {
    if (event)
      this.DefaultColumns.push(item)
    else
      this.DefaultColumns.splice(this.DefaultColumns.indexOf(item), 1)
  }
  selectedDate(event) {
    var date = new Date(this.searchForm.value.dateValue)
    console.log("ISO Format = " + date.toISOString())
    console.log("UTC = " + this.searchForm.value.dateValue.toUTCString())
  }

  search(event) {
    const p = Object.assign({}, this.autoSuggest, this.searchForm.value);
    this.ErrorMessages = this.searchFormBuilderService.ErrorMessages;
    if (this.ErrorMessages == undefined) {
      this.typeaheadServiceService.getState(this.text).subscribe(states => {
        this.results = states;
      });
    } else {
      this.results = new Array();
    }
  }
  searchExecutionVenue(event) {
    this.ErrorMessagesExecutionVenue = this.searchFormBuilderService.ErrorMessagesExecutionVenue;
    if (this.ErrorMessagesExecutionVenue == undefined) {
      this.typeaheadServiceService.getState(this.textExecutionVenue).subscribe(states => {
        this.results = states;
      });
    } else {
      this.results = new Array();
    }
  }
}

