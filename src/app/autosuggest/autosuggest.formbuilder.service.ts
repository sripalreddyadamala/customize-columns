import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'app/autosuggest/autosuggest.Validation.service ';
@Injectable()
export class SearchFormBuilderService{

    ErrorMessages: string[];
    ErrorMessagesExecutionVenue: string[];
    constructor(private fb: FormBuilder, private validationService: ValidationService){}
    BuidFormControls(){
           let searchForm: FormGroup;
            searchForm = this.fb.group(
            {
                dateValue: [],
                searchTerm : ['', [this.validationService.searchTermValidator,
                    this.validationService.searchTermStart,
                    this.validationService.searchTermEnd,
                    Validators.maxLength(52)
                    ]
                ]   ,

                executionVenue: ['', [this.validationService.searchTermValidator,
                    this.validationService.searchTermStart
                    ]
                ]
            }
            );
        const searchTermControl = searchForm.get('searchTerm');
            searchTermControl.valueChanges.subscribe(value => {
                   this.ErrorMessages = this.validationService.setMessage(searchTermControl)
                });
         const executionVenueControl = searchForm.get('executionVenue');
            executionVenueControl.valueChanges.subscribe(value => {
                   this.ErrorMessagesExecutionVenue = this.validationService.setMessage(executionVenueControl)
                });
                return searchForm;
            }
        }
