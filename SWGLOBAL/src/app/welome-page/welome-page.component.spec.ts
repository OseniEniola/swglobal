import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelomePageComponent } from './welome-page.component';

describe('WelomePageComponent', () => {
  let component: WelomePageComponent;
  let fixture: ComponentFixture<WelomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
