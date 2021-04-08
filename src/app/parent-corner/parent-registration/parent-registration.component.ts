import { Component, OnInit } from '@angular/core';
import { ParentDetail, ParentDetailDefault } from 'src/app/models/parent-detail.model';

@Component({
  selector: 'app-parent-registration',
  templateUrl: './parent-registration.component.html',
  styleUrls: ['./parent-registration.component.css']
})
export class ParentRegistrationComponent implements OnInit {

  parentDetail: ParentDetail = ParentDetailDefault;
  currentDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
