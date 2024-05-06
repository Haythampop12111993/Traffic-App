import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadVideoControlComponent } from './road-video-control.component';

describe('RoadVideoControlComponent', () => {
  let component: RoadVideoControlComponent;
  let fixture: ComponentFixture<RoadVideoControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadVideoControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadVideoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
