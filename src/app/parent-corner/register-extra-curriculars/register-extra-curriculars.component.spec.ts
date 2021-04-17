import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterExtraCurricularsComponent } from './register-extra-curriculars.component';

describe('RegisterExtraCurricularsComponent', () => {
  let component: RegisterExtraCurricularsComponent;
  let fixture: ComponentFixture<RegisterExtraCurricularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterExtraCurricularsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterExtraCurricularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
