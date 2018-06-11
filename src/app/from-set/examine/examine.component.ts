import { Component, OnInit, Input  } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Title } from '@angular/platform-browser';

interface City {
  name: string;
  code: string;
}

interface Items {
  name: string;
  code: string;
}
interface Namelist {
  Company;
  name;
}

@Component({
  selector: 'from-examine',
  templateUrl: './examine.component.html'
})
export class FromExamineComponent implements OnInit {
  @Input() title: string;
  @Input() radioname: string;
  public selectedValue: string;
  public roles: SelectItem[];
  public names: SelectItem[];
  public Companys: SelectItem[];
  public Company: Items;
  public name: Items;
  public role: Items;
  public namelist: Namelist[];

  constructor() { }

  ngOnInit() {
    this.selectedValue = 'val1';
    this.roles = [
      {label: '科長', value: {id: 1, name: '科長', code: '1'}},
      {label: '經理', value: {id: 2, name: '經理', code: '2'}},
      {label: '部長', value: {id: 3, name: '部長', code: '3'}}
  ];
  this.names = [
    {label: '侯德發', value: {id: 1, name: '侯德發', code: '1'}},
    {label: '侯德陸', value: {id: 2, name: '侯德陸', code: '2'}},
    {label: '侯德七', value: {id: 3, name: '侯德七', code: '3'}}
];
this.Companys = [
  {label: '諮詢室-系統科', value: {id: 1, name: '諮詢室-系統科', code: '1'}},
  {label: '諮詢室-安全科', value: {id: 2, name: '諮詢室-安全科', code: '2'}},
  {label: '諮詢室-技术科', value: {id: 3, name: '諮詢室-技术科', code: '3'}}
];

this.namelist = [
  {
    Company: '諮詢室-系統科',
    name: '侯德陸'
  },
  {
    Company: '諮詢室-安全科',
    name: '侯德發'
  }
];
this.name = {
  name: this.names[0].label,
  code: ''
}
this.Company = {
  name: this.Companys[0].label,
  code: ''
}

  }

  delete(name) {
    let namelists = [];
    this.namelist.map((item, i) => {
    if (item.Company !== name.Company || item.name !== name.name) {
      namelists.push(item)
    }
    });
    this.namelist = namelists;
  }
  edit(name) {
 console.log(name)
  }
  addname() {
   let item: Namelist;
   let namelists = [];
   item = {
    Company: this.Company.name,
    name: this.name.name
   }
   this.namelist.push(item);
  }
}
