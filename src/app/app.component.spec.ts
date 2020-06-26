import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should match snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // const component = fixture..componentInstance;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
