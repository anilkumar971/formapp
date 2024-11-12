import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2AgeComponent } from './page2-age.component';

describe('Page2AgeComponent', () => {
  let component: Page2AgeComponent;
  let fixture: ComponentFixture<Page2AgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page2AgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page2AgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
