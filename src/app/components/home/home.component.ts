import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobleService } from '../../services/globle/globle.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public globle: GlobleService) {
    if (localStorage.getItem('loginToken') != null) {
      this.globle.isLogin = true;
    }
  }
}
