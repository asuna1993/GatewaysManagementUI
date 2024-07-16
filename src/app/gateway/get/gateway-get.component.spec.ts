import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayGetComponent } from './gateway-get.component';

describe('GatewayGetComponent', () => {
  let component: GatewayGetComponent;
  let fixture: ComponentFixture<GatewayGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
