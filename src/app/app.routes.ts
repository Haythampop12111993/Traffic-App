import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LocationComponent } from './components/location/location.component';
import { RoadControlComponent } from './components/road-control/road-control.component';
import { TrafficJamComponent } from './components/traffic-jam/traffic-jam.component';
import { RoadVideoControlComponent } from './components/road-video-control/road-video-control.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'login', component: LoginComponent, title: 'تسجيل الدخول' },
  { path: 'location', component: LocationComponent, title: 'نظام التتبع' },
  {
    path: 'roadControl',
    component: RoadControlComponent,
    title: 'التحكم في الطرق',
  },
  {
    path: 'trafficJam',
    component: TrafficJamComponent,
    title: 'بيانات الازدحام',
  },
  {
    path: 'roadVideoControl',
    component: RoadVideoControlComponent,
    title: 'التنبؤ بالازدحام',
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
