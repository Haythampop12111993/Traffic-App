import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadControlComponent } from './road-control.component';

describe('RoadControlComponent', () => {
  let component: RoadControlComponent;
  let fixture: ComponentFixture<RoadControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
