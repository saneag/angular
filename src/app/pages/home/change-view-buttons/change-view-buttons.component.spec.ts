import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeViewButtonsComponent } from './change-view-buttons.component';

describe('ChangeViewButtonsComponent', () => {
  let component: ChangeViewButtonsComponent;
  let fixture: ComponentFixture<ChangeViewButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeViewButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeViewButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
