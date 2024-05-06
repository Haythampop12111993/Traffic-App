import { GlobleService } from './../../services/globle/globle.service';
import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-light-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    RouterModule,
  ],
  templateUrl: './light-dialog.component.html',
  styleUrl: './light-dialog.component.css',
})
export class LightDialogComponent {
  images = [
    {
      id: 1,
      image: 'assets/dribbbble_feutricolore_2-move.gif',
      class: 'btn lightNotActive',
    },
    {
      id: 2,
      image: 'assets/green.gif',
      class: 'btn lightNotActive',
    },
    {
      id: 3,
      image: 'assets/red.png',
      class: 'btn lightNotActive',
    },
  ];
  newImage = '';
  constructor(
    public dialogRef: MatDialogRef<LightDialogComponent>,
    private router: Router,
    private toastr: ToastrService,
    private GlobleService: GlobleService
  ) {
    setTimeout(() => {
      const ligthControlsImages = localStorage.getItem('controlData');
      if (ligthControlsImages != null) {
        const localControlData = JSON.parse(ligthControlsImages);
        this.images = this.images.filter((element) => {
          return element.image != localControlData.image;
        });
      }
    }, 50);
  }

  onClick(id: number): void {
    this.images.forEach((element) => {
      if (element.id == id) {
        element.class = 'btn lightActive';
        this.newImage = element.image;
        console.log(this.newImage);
      } else {
        element.class = 'btn lightNotActive';
      }
    });
  }
  onChange() {
    if (this.newImage != '') {
      const ligthControlsImages = localStorage.getItem('controlData');
      if (ligthControlsImages != null) {
        const localControlData = JSON.parse(ligthControlsImages);
        localControlData.image = this.newImage;
        localStorage.setItem('controlData', JSON.stringify(localControlData));
        console.log(localControlData);
        const allControlsArray = JSON.parse(
          localStorage.getItem('roadControl')!
        );
        allControlsArray.forEach((element: any) => {
          if (element.ControlId == localControlData.ControlId) {
            element.image = this.newImage;
          }
        });
        localStorage.setItem('roadControl', JSON.stringify(allControlsArray));
        this.GlobleService.imagesArray = allControlsArray;
        this.dialogRef.close();
        localStorage.removeItem('controlData');
        // window.location.reload();
        // this.router.navigate(['/roadControl']);
      }
    } else {
      this.toastr.error('من فضلك قم باختيار اللوحة', 'خطأ');
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
    localStorage.removeItem('controlData');
  }
}
