import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { ISubData } from "app/autosuggest/ISubData";

@Injectable()
export class AutosSuggestService {
  states: string[]
  constructor(private http: Http) {
  }
  getAllStates(): Observable<string[]> {
    return this.http.get('assets/countries.json')
      .map((response: Response) => <string[]>response.json())
      .catch(this.handleError);
  }
  getState(text: string): Observable<string[]> {
    return this.http.get('assets/countries.json')
      .map((response: Response) => <string[]>response.json().filter(q => q.toLowerCase().startsWith(text.toLowerCase())))
      .catch(this.handleError);
  }

  getSubdata(): Observable<ISubData[]> {
    return this.http.get('assets/subdata.json')
      .map((response: Response) => <ISubData[]>response.json())
      .catch(this.handleError);
  }
  getDefaultColumns(): Observable<any[]> {
    return this.http.get('assets/DefaultColumns.json')
      .map((response: Response) => <any[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error('eeror');
    return Observable.throw(error.json().error || 'Server error');
  }
}


