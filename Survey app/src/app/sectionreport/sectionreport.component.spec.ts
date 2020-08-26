import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionreportComponent } from './sectionreport.component';

describe('SectionreportComponent', () => {
  let component: SectionreportComponent;
  let fixture: ComponentFixture<SectionreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
