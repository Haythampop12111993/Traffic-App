import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { GlobleService } from '../../services/globle/globle.service';
import { Router, RouterModule } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  image = 'assets/high-visibility-vest.png';
  mySetInterval: any;
  imgArray = [
    'assets/worker.png',
    'assets/browser.png',
    'assets/cctv-camera.png',
    'assets/road-sign.png',
    'assets/warning.png',
    'assets/web-traffic.png',
    'assets/high-visibility-vest.png',
  ];
  loginFormData: any = {
    name: '',
    idNumber: '',
    password: '',
  };

  constructor(private globle: GlobleService, private router: Router) {
    let i = 0;

    this.mySetInterval = setInterval(() => {
      const image: any = document.getElementById('image');
      image.style.opacity = '0';
      image.style.transform = 'translateX(-50%)';
      image.style.transition = 'opacity 1s, transform 1s';
      setTimeout(() => {
        image.style.transition = 'transform 1s ';
        image.src = this.imgArray[i];
        image.style.opacity = '1';
        image.style.transform = 'translateX(0)';
        image.style.transition = 'opacity 1s, transform 1s';
        i = (i + 1) % this.imgArray.length;
      }, 1000); // Change this value to match the CSS transition duration
    }, 3000);
  }
  nameFormControl = new FormControl('', [
    Validators.required,
    // Validators.minLength(3),
  ]);
  idNumberFormControl = new FormControl('', [
    Validators.required,
    // Validators.minLength(10),
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    // Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
  ]);

  matcher = new MyErrorStateMatcher();
  onSubmit = () => {
    console.log(this.loginFormData);
    if (
      this.nameFormControl.valid &&
      this.idNumberFormControl.valid &&
      this.passwordFormControl.valid
    ) {
      console.log('submitted');
      this.loginFormData = {
        name: this.nameFormControl.value,
        idNumber: this.idNumberFormControl.value,
        password: this.passwordFormControl.value,
      };

      console.log(this.loginFormData);
      localStorage.setItem('loginFormData', JSON.stringify(this.loginFormData));
      localStorage.setItem(
        'loginToken',
        JSON.stringify(Math.random().toString(36).substring(2))
      );
      this.globle.isLogin = true;
      this.router.navigate(['/home']);
      this.nameFormControl.setValue('');
      this.idNumberFormControl.setValue('');
      this.passwordFormControl.setValue('');
    }
  };
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.mySetInterval);
    this.mySetInterval = null;
    console.log('destroyed');
  }
}
