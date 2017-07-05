import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSuggestComponent } from './autosuggest.component';

describe('TypeaheadComponent', () => {
  let component: AutoSuggestComponent;
  let fixture: ComponentFixture<AutoSuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutoSuggestComponent]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
