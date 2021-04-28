import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDefault } from 'src/app/models/student.model';
import { Admission, AdmissionDefault } from '../../models/admission.model';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  // template:`
  // <p>Hi There,</p>
  // <label>my app</label>
  // `,
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit, OnDestroy {
  admission: Admission = { ...AdmissionDefault };
  admissions: Array<Admission> = new Array<Admission>();
  isRequired: boolean = true;
  isStudentProp: boolean = true;
  referredByMethods: { id: number, name: string }[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.referredByMethods = [{ id: 1, name: "News Paper - default" },
    { id: 2, name: "Pamplets" },
    { id: 3, name: "Positive word of mouth" },
    { id: 4, name: "Emails" }];
    let admissionsJSON: string | null = localStorage.getItem("admissions");
    this.admissions = admissionsJSON ? JSON.parse(admissionsJSON) : new Array<Admission>();
  }

  admissionSubmit(): void {
    let studentId = Math.round(Math.random() * 100000),
      parentName = this.admission.gaurdian;
    this.admission.student.id = studentId;
    this.admissions.push({
      student: { ...this.admission.student },
      gaurdian: this.admission.gaurdian,
      referredBy: this.admission.referredBy,
    });
    this.admission = { ...AdmissionDefault };
    this.admission.student = { ...StudentDefault };
    localStorage.setItem("admissions", JSON.stringify(this.admissions));
    this.router.navigate(["/home", 'parentcorner', 'parentreg', studentId])
  }

  ngOnDestroy() {
    // localStorage.clear();
    // sessionStorage.clear();
  }

}
