import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMSSettingComponent } from './mmssetting.component';

describe('MMSSettingComponent', () => {
  let component: MMSSettingComponent;
  let fixture: ComponentFixture<MMSSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMSSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MMSSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
