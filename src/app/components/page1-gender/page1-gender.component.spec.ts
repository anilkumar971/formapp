import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1GenderComponent } from './page1-gender.component';

describe('Page1GenderComponent', () => {
  let component: Page1GenderComponent;
  let fixture: ComponentFixture<Page1GenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page1GenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page1GenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
