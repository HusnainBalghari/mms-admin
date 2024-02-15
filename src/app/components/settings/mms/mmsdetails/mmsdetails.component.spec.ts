import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmsdetailsComponent } from './mmsdetails.component';

describe('MmsdetailsComponent', () => {
  let component: MmsdetailsComponent;
  let fixture: ComponentFixture<MmsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmsdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
