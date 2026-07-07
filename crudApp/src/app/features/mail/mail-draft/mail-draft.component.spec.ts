import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailDraftComponent } from './mail-draft.component';

describe('MailDraftComponent', () => {
  let component: MailDraftComponent;
  let fixture: ComponentFixture<MailDraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MailDraftComponent]
    });
    fixture = TestBed.createComponent(MailDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
