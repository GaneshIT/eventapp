import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlistcomponentComponent } from './eventlistcomponent.component';

describe('EventlistcomponentComponent', () => {
  let component: EventlistcomponentComponent;
  let fixture: ComponentFixture<EventlistcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventlistcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventlistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
