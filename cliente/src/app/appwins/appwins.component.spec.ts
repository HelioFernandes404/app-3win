import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppwinsComponent } from './appwins.component';

describe('AppwinsComponent', () => {
  let component: AppwinsComponent;
  let fixture: ComponentFixture<AppwinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppwinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppwinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
