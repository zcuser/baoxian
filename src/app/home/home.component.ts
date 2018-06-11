import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public switch: string;
  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.switch = 'open';
  }

  triggerChange($event) {
    if ($event === 'open') {
      this.switch = 'container-open'
    } else {
      this.switch = 'container-close'
    }
  }
}
