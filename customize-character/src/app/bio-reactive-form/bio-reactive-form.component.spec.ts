import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioReactiveFormComponent } from './bio-reactive-form.component';

describe('BioReactiveFormComponent', () => {
  let component: BioReactiveFormComponent;
  let fixture: ComponentFixture<BioReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
