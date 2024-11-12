import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3SelfieComponent } from './page3-selfie.component';

describe('Page3SelfieComponent', () => {
  let component: Page3SelfieComponent;
  let fixture: ComponentFixture<Page3SelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page3SelfieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page3SelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
