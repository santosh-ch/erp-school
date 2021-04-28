import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Admission, AdmissionDefault } from 'src/app/models/admission.model';
import { Student, StudentDefault } from 'src/app/models/student.model';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-register-extra-curriculars',
  templateUrl: './register-extra-curriculars.component.html',
  styleUrls: ['./register-extra-curriculars.component.css']
})
export class RegisterExtraCurricularsComponent implements OnInit {

  regForm: FormGroup;
  ecActivities: string[] = [];
  students: Student[] = [];
  studentId: number = 0;
  constructor(private route: ActivatedRoute, private sharedService: SharedService) {
    route.params.subscribe((params) => {
      this.studentId = params && params['id'] ? params['id'] : 0;
    }, (error) => {
      console.log(error);
    })
    this.regForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl()
      }),
      parentName: new FormControl("", Validators.required),
      age: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.max(15)]),
      activities: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
    });
    sharedService.activeFormName = "regForm";
  }

  ngOnInit(): void {
    let self = this;
    self.ecActivities = ["Running", "Skating", "Swimming", "Theater", "Hockey"];
    let studentsJSON: string | null = localStorage.getItem("ec_students");
    self.students = studentsJSON ? JSON.parse(studentsJSON) : [];

    let admissionsJSON: string | null = localStorage.getItem("admissions"),
      admissions: Array<Admission> = admissionsJSON ? JSON.parse(admissionsJSON) : new Array<Admission>(),
      currentAdmission = admissions.find(x => x.student.id == self.studentId);
    currentAdmission = currentAdmission ? currentAdmission : AdmissionDefault;
    let studentNameSegments: Array<string> = currentAdmission.student.name.split(' ');
    self.regForm.controls.parentName.setValue(currentAdmission.gaurdian);
    self.regForm.controls.age.setValue(currentAdmission.student.age);
    // self.regForm.patchValue({
    //   fullName: {
    //     firstName: studentNameSegments && studentNameSegments.length > 0 ? studentNameSegments[0] : '',
    //     lastName: studentNameSegments && studentNameSegments.length > 1 ? studentNameSegments[1] : ''
    //   }
    // });
    self.regForm.controls.fullName.setValue({
      firstName: studentNameSegments && studentNameSegments.length > 0 ? studentNameSegments[0] : '',
      lastName: studentNameSegments && studentNameSegments.length > 1 ? studentNameSegments[1] : ''
    });
    // self.regForm.get('fullName.firstName')?.setValue(studentNameSegments && studentNameSegments.length > 0 ? studentNameSegments[0] : '');
    // self.regForm.get('fullName.firstName')?.setValue(studentNameSegments && studentNameSegments.length > 1 ? studentNameSegments[1] : '');
  }

  submit() {
    let self = this,
      currentStudent = { ...StudentDefault };
    if (self.regForm.valid) {
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
