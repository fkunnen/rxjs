import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html'
})
export class Exercise4Component implements OnInit {

  text = '';

  constructor() { }

  ngOnInit() {
  }

  clickButton() {
    this.text += 'set';
  }

}
