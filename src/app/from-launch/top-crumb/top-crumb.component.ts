import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'top-crumb',
  templateUrl: './top-crumb.component.html',
  styleUrls: ['./top-crumb.component.scss']
})
export class TopCrumbComponent implements OnInit {
  @Input() title: string;
  public items: MenuItem[];
  public activeIndex: number;
  public types: SelectItem[];
  public type: string;
  constructor() { }
  ngOnInit() {
    this.activeIndex = 1;
    this.types = [
      {label: '資訊類表單', value: {id: 1, name: '資訊類表單', code: 'NY'}},
      {label: '申請類表單', value: {id: 2, name: '申請類表單', code: 'RM'}},
      {label: '資訊類表單', value: {id: 3, name: '申請類表單', code: 'LDN'}}
  ];
    this.type = this.types[0].label;
    this.items = [
      {label: '申請人', command: (event) => {this.tabclick(event)}},
      {label: '稽核人', command: (event) => {this.tabclick(event)}},
      {label: '承辦初核人', command: (event) => {this.tabclick(event)}},
      {label: '承辦人', command: (event) => {this.tabclick(event)}},
      {label: '承辦覆核人', command: (event) => {this.tabclick(event)}}
  ];
  }
  tabclick(event) {
  }
}
