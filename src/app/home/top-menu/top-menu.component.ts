import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { EventBusService } from '../../common/services/event-bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {}

  public logoutclick(event): void {
     this.router.navigateByUrl('login');
  }
}
