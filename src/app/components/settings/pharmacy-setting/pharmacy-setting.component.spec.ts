import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacySettingComponent } from './pharmacy-setting.component';

describe('PharmacySettingComponent', () => {
  let component: PharmacySettingComponent;
  let fixture: ComponentFixture<PharmacySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacySettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
