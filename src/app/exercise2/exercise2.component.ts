import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html'
})
export class Exercise2Component implements OnInit {

  text = '';

  constructor() { }

  ngOnInit() {
  }

  clickButton() {
    this.text += 'set';
  }

}
