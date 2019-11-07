import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypollComponent } from './mypoll.component';

describe('MypollComponent', () => {
  let component: MypollComponent;
  let fixture: ComponentFixture<MypollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
