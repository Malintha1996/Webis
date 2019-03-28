import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSCatergoryComponent } from './jscatergory.component';

describe('JSCatergoryComponent', () => {
  let component: JSCatergoryComponent;
  let fixture: ComponentFixture<JSCatergoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSCatergoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSCatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
