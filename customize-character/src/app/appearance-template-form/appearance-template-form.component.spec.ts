import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceTemplateFormComponent } from './appearance-template-form.component';

describe('AppearanceTemplateFormComponent', () => {
  let component: AppearanceTemplateFormComponent;
  let fixture: ComponentFixture<AppearanceTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppearanceTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppearanceTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
