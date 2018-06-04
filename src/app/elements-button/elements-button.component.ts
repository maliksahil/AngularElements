import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-elements-button',
  templateUrl: './elements-button.component.html',
  styleUrls: ['./elements-button.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ElementsButtonComponent {
  @Input() displayText = 'Elements Button';
  @Output() clicked = new EventEmitter<string>();

  buttonClicked() {
    this.clicked.emit('Button clicked at ' + new Date().toTimeString());
  }
}
