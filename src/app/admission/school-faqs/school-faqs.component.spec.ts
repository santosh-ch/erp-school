import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolFaqsComponent } from './school-faqs.component';

describe('SchoolFaqsComponent', () => {
  let component: SchoolFaqsComponent;
  let fixture: ComponentFixture<SchoolFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
