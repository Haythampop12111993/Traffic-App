import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobleService {
  isLogin = false;
  imagesArray: any = [];
  constructor() {}
}
