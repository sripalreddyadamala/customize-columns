import { TestBed, inject } from '@angular/core/testing';

import { AutosSuggestService } from './autosuggest.service';

describe('TypeaheadServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutosSuggestService]
    });
  });

  it('should be created', inject([AutosSuggestService], (service: AutosSuggestService) => {
    expect(service).toBeTruthy();
  }));
});
