import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeventcomponentComponent } from './addeventcomponent.component';

describe('AddeventcomponentComponent', () => {
  let component: AddeventcomponentComponent;
  let fixture: ComponentFixture<AddeventcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddeventcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddeventcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
