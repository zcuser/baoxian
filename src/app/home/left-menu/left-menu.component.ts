import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [
    trigger('container', [
      state('open', style({
        'width': '150px'
      })),
      state('close', style({
        'width': '35px'
      })),
      transition('* => *', animate(100))
    ]),
    trigger('icon', [
      state('open', style({
        'left': '170px'
      })),
      state('close', style({
        'left': '55px'
      })),
      transition('* => *', animate(100))
    ])
  ]
})
export class LeftMenuComponent implements OnInit {
  public container: string;
  public switchimg: string;
  @Output() change = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.container = 'open';
    this.switchimg = 'openimg';
    this.change.emit(this.container);
}

  trigger() {
    this.container = this.container === 'open' ? 'close' : 'open';
    this.switchimg = this.container === 'open' ? 'openimg' : 'closeimg';
    this.change.emit(this.container);
}

  }
