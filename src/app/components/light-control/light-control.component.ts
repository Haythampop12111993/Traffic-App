import { Component, Input, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LightDialogComponent } from '../light-dialog/light-dialog.component';

@Component({
  selector: 'app-light-control',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './light-control.component.html',
  styleUrl: './light-control.component.css',
})
export class LightControlComponent {
  // image = 'assets/dribbbble_feutricolore_2-move.gif';
  image = '';
  @Input() data: any;
  constructor(public dialog: MatDialog) {
    // data: {
    //   image: this.image;
    // }
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.data);
    this.image = this.data.image;
  }

  openDialog(event: any): void {
    const dialogRef = this.dialog.open(LightDialogComponent, {});
    console.log(event.target.src.toString().slice(22));
    localStorage.setItem('controlData', JSON.stringify(this.data));
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    //   this.image = result;
    // });
  }
}
