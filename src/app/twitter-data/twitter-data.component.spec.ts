import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterDataComponent } from './twitter-data.component';

describe('TwitterDataComponent', () => {
  let component: TwitterDataComponent;
  let fixture: ComponentFixture<TwitterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
