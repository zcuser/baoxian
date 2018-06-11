import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
interface Froms {
  status?: string;
  progress?: string;
  type?: string;
  number?: string;
  unitnumber?: string;
  date?: string;
  company?: string;
  name?: string;
  phone?: string;
  auditor?: string;
  auditorname?: string;
}
interface DataList {
  detail;
  type;
  date;
  devicenum;
  num;
  oldusercompany;
  newusercompany;
  usercompanyisclear;
  id;
}
@Component({
  selector: 'from-launch',
  templateUrl: './from-launch.component.html',
  styleUrls: ['./from-launch.component.scss']
})
export class FromLaunchComponent implements OnInit {
  public titles: object[];
  public froms: Froms;
  public selectedValues: string[] = [];
  public dataList: DataList[];
  public index: number;
  public conpannys: any[];
  public conpanny: string;
  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.selectedValues = ['val1'];
    this.conpannys = [
    {label: '諮詢室-系統科', value: {id: 1, name: '諮詢室-系統科', code: '1'}},
    {label: '諮詢室-安全科', value: {id: 2, name: '諮詢室-安全科', code: '2'}},
    {label: '諮詢室-技术科', value: {id: 3, name: '諮詢室-技术科', code: '3'}}]
    this.index = 0;
    this.froms = {
      status: '申請中',
      progress: '2/5-20%',
      type: '資訊類',
      number: 'E001-00001',
      unitnumber: '',
      date: '2018/05/02',
      company: '諮詢室-系統科',
      name: '侯德發',
      phone: '',
      auditor: '諮詢室-系統科',
      auditorname: '侯德發'
    }
    this.dataList = [
      {
        detail: '新增',
        type: '筆電',
        date: '2018/06/06',
        devicenum: 'NUB0090',
        num: '14946',
        oldusercompany: '',
        newusercompany: '諮詢室-劉德華',
        usercompanyisclear: '是',
        id: this.index
      }
    ]
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
delete(data) {
  let namelists = [];
    this.dataList.map((item, i) => {
    if (item.id !== data.id) {
      namelists.push(item)
    }
    });
    this.dataList = namelists;
}
addname() {
  this.index += 1;
  this.dataList.push({
    detail: '请输入...',
    type: '请输入...',
    date: '请输入...',
    devicenum: '请输入...',
    num: '请输入...',
    oldusercompany: '请输入...',
    newusercompany: '请输入...',
    usercompanyisclear: '请输入...',
    id: this.index
  })
}

}
