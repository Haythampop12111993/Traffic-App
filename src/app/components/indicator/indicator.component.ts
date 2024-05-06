import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  standalone: true,
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css'],
})
export class IndicatorComponent {
  // canvas: any;
  // ctx: any;
  // gaugeValueInput: any;
  // gaugeRangeText: any;
  // ngOnInit() {
  //   this.canvas = document.getElementById('gauge') as HTMLCanvasElement;
  //   this.ctx = this.canvas.getContext('2d');
  //   this.gaugeValueInput = document.getElementById(
  //     'gaugeValue'
  //   ) as HTMLInputElement;
  //   this.gaugeRangeText = document.getElementById('gaugeRangeText');
  //   this.updateGauge();
  // }
  // updateGauge() {
  //   const gaugeValue = parseInt(this.gaugeValueInput.value);
  //   this.drawGauge(gaugeValue);
  //   this.updateGaugeRange(gaugeValue);
  // }
  // drawGauge(value: number) {
  //   const centerX = this.canvas.width / 2;
  //   const centerY = this.canvas.height / 2;
  //   const radius = this.canvas.width / 2 - 10;
  //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //   // الكود الباقي لرسم العداد
  //   const startAngle = -Math.PI / 2;
  //   const endAngle = (value / 100) * Math.PI * 2 - Math.PI / 2;
  //   this.ctx.beginPath();
  //   this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  //   this.ctx.lineWidth = 10;
  //   this.ctx.strokeStyle = this.getColor(value);
  //   this.ctx.stroke();
  // }
  // getColor(value: number) {
  //   // الكود لإرجاع لون حسب القيمة
  // }
  // updateGaugeRange(value: number) {
  //   // الكود لتحديث نص نطاق العداد
  // }
  number: number = 1;
  changeNumber: any = '';
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const changeEle = document.querySelector('#number') as HTMLElement;
    this.changeNumber = setInterval(() => {
      if (this.number < 2000) {
        const randomNum = Math.floor(Math.random() * 7) + 1;
        console.log(randomNum);
        this.number += randomNum;
        console.log(this.number);
        console.log(changeEle.classList[2]);
        if (this.number > 500) {
          changeEle.classList.remove('rischio1');
          changeEle.classList.add('rischio2');
        }
        if (this.number > 1000) {
          changeEle.classList.remove('rischio2');
          changeEle.classList.add('rischio3');
        }
        if (this.number > 1500) {
          changeEle.classList.remove('rischio3');
          changeEle.classList.add('rischio4');
        }
      } else {
        // clearInterval(changeNumber);
        this.number = 0;
        changeEle.classList.remove('rischio4');
        changeEle.classList.add('rischio1');
      }
    }, 150);
    ////////////////////////////////////////////////////////////////////////
    //   var rangeMeter: any = document.querySelector('#range');
    //   var rangeShow: any = document.querySelector('#show');
    //   var rangeClock: any = document.querySelector('.meter-clock');
    //   function rangeChange() {
    //     var rotateClock = rangeMeter.value;
    //     rangeClock.style.transform =
    //       'rotate(' + (-90 + (rotateClock * 180) / 100) + 'deg)';
    //     rangeShow.value = rotateClock + '%';
    //   }
    //   rangeMeter.addEventListener('input', rangeChange);
    ///////////////////////////////////////////////////////////////////////////
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.changeNumber);
  }
}
