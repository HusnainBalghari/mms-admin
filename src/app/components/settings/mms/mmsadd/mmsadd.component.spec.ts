import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMSAddComponent } from './mmsadd.component';

describe('MMSAddComponent', () => {
  let component: MMSAddComponent;
  let fixture: ComponentFixture<MMSAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMSAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MMSAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
