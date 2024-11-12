import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4SubmitComponent } from './page4-submit.component';

describe('Page4SubmitComponent', () => {
  let component: Page4SubmitComponent;
  let fixture: ComponentFixture<Page4SubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page4SubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page4SubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
