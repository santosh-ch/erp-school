import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student, StudentDefault } from 'src/app/models/student.model';

@Component({
  selector: 'app-register-extra-curriculars',
  templateUrl: './register-extra-curriculars.component.html',
  styleUrls: ['./register-extra-curriculars.component.css']
})
export class RegisterExtraCurricularsComponent implements OnInit {

  regForm: FormGroup;
  ecActivities: string[] = [];
  students: Student[] = [];
  constructor() {
    this.regForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl()
      }),
      parentName: new FormControl("", Validators.required),
      age: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.max(15)]),
      activities: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
    });
  }

  ngOnInit(): void {
    this.ecActivities = ["Running", "Skating", "Swimming", "Theater", "Hockey"];
    let studentsJSON: string | null = localStorage.getItem("ec_students");
    this.students = studentsJSON ? JSON.parse(studentsJSON) : [];
  }

  submit() {
    let self = this,
      currentStudent = { ...StudentDefault };
    if (self.regForm.valid) {
      debugger;
      currentStudent.name = self.regForm.get('fullName.firstName')?.value +
        (self.regForm.get('fullName.lastName')?.value ? (" " + self.regForm.get('fullName.lastName')?.value) : "").toString();
      currentStudent.gaurdian = self.regForm.controls.parentName.value;
      currentStudent.age = self.regForm.controls.age.value;
      currentStudent.activities = self.regForm.controls.activities.value;
      self.students.push(currentStudent);
      localStorage.setItem("ec_students", JSON.stringify(self.students));
      self.regForm.reset();
    }
  }

}
