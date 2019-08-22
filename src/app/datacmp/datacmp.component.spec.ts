import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacmpComponent } from './datacmp.component';

describe('DatacmpComponent', () => {
  let component: DatacmpComponent;
  let fixture: ComponentFixture<DatacmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
