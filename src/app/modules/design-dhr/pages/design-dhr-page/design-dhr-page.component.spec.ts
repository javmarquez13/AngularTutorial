import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDhrPageComponent } from './design-dhr-page.component';

describe('DesignDhrPageComponent', () => {
  let component: DesignDhrPageComponent;
  let fixture: ComponentFixture<DesignDhrPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignDhrPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignDhrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
