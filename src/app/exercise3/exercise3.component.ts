import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html'
})
export class Exercise3Component implements OnInit {

  text = '';

  constructor() { }

  ngOnInit() {
  }

  clickButton() {
    this.text += 'set';
  }

}
