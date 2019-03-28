import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCatergoryComponent } from './web-catergory.component';

describe('WebCatergoryComponent', () => {
  let component: WebCatergoryComponent;
  let fixture: ComponentFixture<WebCatergoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebCatergoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
