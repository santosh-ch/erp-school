import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { scoreDefault, Student, StudentDefault } from 'src/app/models/student.model';

@Component({
  selector: 'app-marks-entry-form',
  templateUrl: './marks-entry-form.component.html',
  styleUrls: ['./marks-entry-form.component.css']
})
export class MarksEntryFormComponent implements OnInit,AfterViewInit {
  student:Student = {...StudentDefault};
  studentObj:Student = {...StudentDefault};
  formSubmitted:boolean = false;
  @ViewChild('marksEntry') marksEntryForm: NgForm|null = null;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  }

  submit(){
   let self = this;
   self.formSubmitted = true;
   if(self.marksEntryForm?.valid){
    self.studentObj = {...self.student};
    self.student.score.total = (parseInt(self.student.score.maths) +  
      parseInt(self.student.score.science) +  parseInt(self.student.score.social)).toString();
      debugger;
    self.marksEntryForm?.form.reset();
   }
  }

  reset(){
    let self = this;
    self.studentObj = self.student = {...StudentDefault};
    self.student.score = self.studentObj.score = {...scoreDefault};
    self.marksEntryForm?.form.reset();
  }

}
