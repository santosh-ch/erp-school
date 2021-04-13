import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksEntryFormComponent } from './marks-entry-form.component';

describe('MarksEntryFormComponent', () => {
  let component: MarksEntryFormComponent;
  let fixture: ComponentFixture<MarksEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksEntryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
