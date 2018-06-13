import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html'
})
export class Exercise1Component implements OnInit {

  text = '';

  constructor() { }

  ngOnInit() {
  }

  clickButton() {
    this.text += 'set';
  }

  reset() {
    this.text = '';
  }
}
