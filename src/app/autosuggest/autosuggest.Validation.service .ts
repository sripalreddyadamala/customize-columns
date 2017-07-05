import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder } from '@angular/forms';

@Injectable()
export class ValidationService {

  SearchValidatorMessages = {
    required: '',
    specialCharacters: 'Special characters are not allowed',
    specialCharactersAtStart: 'Special characters at starting not allowed'
  }
  searchTermValidator(control) {
    let newstr = '';
    if (control.value != undefined) {
      newstr = control.value.replace(/[\sa-zA-Z0-9|\-|\:|\.|\-|\_]/g, '');
      if (newstr.length > 0) {
        return {
          'specialCharacters': true
        }
      }
    }
    return null;
  }
  searchTermStart(control) {
    if (control.value != undefined) {
      if (control.value.match(/^[\-|\.|\:|\-|\_]/)) {
        return {
          'specialCharactersAtStart': true
        }
      }
    }
    return null;
  }
  searchTermEnd(control) {
    if (control.value != undefined) {
      if (control.value.match(/[\-|\.|\:|\-|\_]$/)) {
        return {
          'specialCharactersAtStart': true
        }
      }
    }
    return null;
  }
  setMessage(c: AbstractControl): string[] {
    let searchTermMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      searchTermMessage = Object.keys(c.errors).map(key =>
        this.SearchValidatorMessages[key]).join(', ');
      console.log('error JSON =' + searchTermMessage)
      return Object.keys(c.errors).map(key =>
        this.SearchValidatorMessages[key]);
    }
  }
}
