import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGetComponent } from './device-get.component';

describe('DeviceGetComponent', () => {
  let component: DeviceGetComponent;
  let fixture: ComponentFixture<DeviceGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
