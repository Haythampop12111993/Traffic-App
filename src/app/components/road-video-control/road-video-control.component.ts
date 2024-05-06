import { Component } from '@angular/core';
import { IndicatorComponent } from '../indicator/indicator.component';

@Component({
  selector: 'app-road-video-control',
  standalone: true,
  imports: [IndicatorComponent],
  templateUrl: './road-video-control.component.html',
  styleUrl: './road-video-control.component.css',
})
export class RoadVideoControlComponent {
  roadVideoArray = [
    {
      videoPath: 'assets/video01.mp4',
    },
    {
      videoPath: 'assets/video2.mp4',
    },
    {
      videoPath: 'assets/video3.mp4',
    },
    {
      videoPath: 'assets/video4.mp4',
    },
    {
      videoPath: 'assets/video5.mp4',
    },
    {
      videoPath: 'assets/video6.mp4',
    },
    {
      videoPath: 'assets/video7.mp4',
    },
    {
      videoPath: 'assets/video2.mp4',
    },
  ];
}
