import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarSuccessComponent } from './snack-bar-success.component';

describe('SnackBarSuccessComponent', () => {
  let component: SnackBarSuccessComponent;
  let fixture: ComponentFixture<SnackBarSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackBarSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
