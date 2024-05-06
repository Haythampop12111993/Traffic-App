import { GlobleService } from './../../../services/globle/globle.service';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  faLocationDot = faLocationDot;
  constructor(public globle: GlobleService, private router: Router) {
    if (localStorage.getItem('loginToken') != null) {
      this.globle.isLogin = true;
    }
  }

  logout() {
    this.globle.isLogin = false;
    localStorage.removeItem('loginToken');
    localStorage.removeItem('loginFormData');
    localStorage.removeItem('roadControl');
    this.router.navigate(['/home']);
    window.location.pathname = '/home';
  }
}
