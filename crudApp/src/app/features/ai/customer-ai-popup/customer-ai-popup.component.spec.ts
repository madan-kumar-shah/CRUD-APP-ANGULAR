import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAiPopupComponent } from './customer-ai-popup.component';

describe('CustomerAiPopupComponent', () => {
  let component: CustomerAiPopupComponent;
  let fixture: ComponentFixture<CustomerAiPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerAiPopupComponent]
    });
    fixture = TestBed.createComponent(CustomerAiPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
