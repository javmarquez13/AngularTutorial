import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfValidatorPageComponent } from './pdf-validator-page.component';

describe('PdfValidatorPageComponent', () => {
  let component: PdfValidatorPageComponent;
  let fixture: ComponentFixture<PdfValidatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfValidatorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfValidatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
