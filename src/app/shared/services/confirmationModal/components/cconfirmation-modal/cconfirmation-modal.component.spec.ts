import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CconfirmationModalComponent } from './cconfirmation-modal.component';

describe('CconfirmationModalComponent', () => {
  let component: CconfirmationModalComponent;
  let fixture: ComponentFixture<CconfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CconfirmationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CconfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
