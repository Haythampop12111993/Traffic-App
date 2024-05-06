import { GlobleService } from './../../services/globle/globle.service';
import { Component } from '@angular/core';
import { LightControlComponent } from '../light-control/light-control.component';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-road-control',
  standalone: true,
  imports: [LightControlComponent],
  templateUrl: './road-control.component.html',
  styleUrl: './road-control.component.css',
})
export class RoadControlComponent {
  roadControlArray = [
    {
      image: 'assets/dribbbble_feutricolore_2-move.gif',
      ControlId: 1,
      controlImage: 'assets/roadControl1.jpeg',
    },
    {
      image: 'assets/dribbbble_feutricolore_2-move.gif',
      ControlId: 2,
      controlImage: 'assets/roadControl2.jpeg',
    },
    {
      image: 'assets/dribbbble_feutricolore_2-move.gif',
      ControlId: 3,
      controlImage: 'assets/roadControl3.jpeg',
    },
    {
      image: 'assets/dribbbble_feutricolore_2-move.gif',
      ControlId: 4,
      controlImage: 'assets/roadControl4.jpeg',
    },
    {
      image: 'assets/dribbbble_feutricolore_2-move.gif',
      ControlId: 5,
      controlImage: 'assets/roadControl5.jpeg',
    },
  ];
  constructor(public GlobleService: GlobleService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (localStorage.getItem('roadControl') != null) {
      const localControlData = JSON.parse(localStorage.getItem('roadControl')!);
      // console.log(this.roadControlArray);
      if (localControlData.length == this.roadControlArray.length) {
        this.roadControlArray = localControlData;
        this.GlobleService.imagesArray = localControlData;
      } else {
        localStorage.setItem(
          'roadControl',
          JSON.stringify(this.roadControlArray)
        );
        this.roadControlArray = localControlData;
        this.GlobleService.imagesArray = localControlData;
      }
    } else {
      localStorage.setItem(
        'roadControl',
        JSON.stringify(this.roadControlArray)
      );
      this.roadControlArray = this.roadControlArray;
      this.GlobleService.imagesArray = this.roadControlArray;
    }
  }
}
