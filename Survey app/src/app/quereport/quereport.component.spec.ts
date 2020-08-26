import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuereportComponent } from './quereport.component';

describe('QuereportComponent', () => {
  let component: QuereportComponent;
  let fixture: ComponentFixture<QuereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
