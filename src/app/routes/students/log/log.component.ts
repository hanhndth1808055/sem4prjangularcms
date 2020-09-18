import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc/table';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-students-log',
  templateUrl: './log.component.html',
})
export class StudentsLogComponent implements OnInit {
  url = `http://localhost:8080/api/student`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: 'No.', type: 'number', index: 'student_id' },
    { title: 'Name', index: 'name' },
    { title: 'Age', type: 'number', width: '50px', index: 'age' },
    { title: 'Gender', index: 'gender' },
    { title: 'Address', index: 'address' },
    // { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        { text: 'details', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}
