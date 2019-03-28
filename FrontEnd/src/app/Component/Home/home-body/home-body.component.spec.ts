import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBODYComponent } from './home-body.component';

describe('HomeBODYComponent', () => {
  let component: HomeBODYComponent;
  let fixture: ComponentFixture<HomeBODYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBODYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBODYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
