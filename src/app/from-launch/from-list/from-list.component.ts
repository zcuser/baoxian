import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
interface DataLists {
  type;
  name;
}
@Component({
  selector: 'from-list',
  templateUrl: './from-list.component.html'
})
export class FromListComponent implements OnInit {
  public types: SelectItem[];
  public type: string;
  public dataList: DataLists[];

 ngOnInit() {
   this.dataList = [
     {type: '資訊類表單', name: '資訊設計申請表單'},
     {type: '資訊類表單', name: '資訊設計申請表單'},
     {type: '資訊類表單', name: '資訊設計申請表單'},
     {type: '資訊類表單', name: '資訊設計申請表單'},
     {type: '資訊類表單', name: '資訊設計申請表單'},
     {type: '資訊類表單', name: '資訊設計申請表單'},
     {type: '資訊類表單', name: '資訊設計申請表單'}
   ]
  this.types = [
    {label: '資訊類表單', value: {id: 1, name: '資訊類表單', code: 'NY'}},
    {label: '申請類表單', value: {id: 2, name: '申請類表單', code: 'RM'}},
    {label: '資訊類表單', value: {id: 3, name: '申請類表單', code: 'LDN'}}
];
  this.type = this.types[0].label;
}
}
