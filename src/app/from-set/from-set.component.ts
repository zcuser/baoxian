import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'from-set',
  templateUrl: './from-set.component.html'
})
export class FromSetComponent implements OnInit {
  public titles: object[];
  public selectedValue: string;
  public roles: SelectItem[];
  public names: SelectItem[];
  public Companys: SelectItem[];
  public Company: City;
  public name: City;
  public role: City;
  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.titles = [{title: '審核人', name: 'examine'},
                   {title: '承辦初核人', name: 'firstexmine'},
                   {title: '承辦人', name: 'undertake'},
                   {title: '承辦覆核人', name: 'Undertakeagain'}
                  ];
    this.selectedValue = '';
    this.roles = [
      {label: '科長', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: '經理', value: {id: 2, name: 'Rome', code: 'RM'}},
      {label: '部長', value: {id: 3, name: 'London', code: 'LDN'}}
  ];
  this.names = [
    {label: '侯德發', value: {id: 1, name: 'New York', code: 'NY'}},
    {label: '侯德陸', value: {id: 2, name: 'Rome', code: 'RM'}},
    {label: '侯德陸', value: {id: 3, name: 'London', code: 'LDN'}}
];
this.Companys = [
  {label: '諮詢室-系統科', value: {id: 1, name: 'New York', code: 'NY'}},
  {label: '諮詢室-安全科', value: {id: 2, name: 'Rome', code: 'RM'}},
  {label: '諮詢室-安全科', value: {id: 3, name: 'London', code: 'LDN'}}
];
}

submitform() {
  this.confirmationService.confirm({
    message: '是否確定送出申請單？',
    header: '警告',
    accept: () => {
        console.log('222')
    }
});
}
}
