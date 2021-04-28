import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admission, AdmissionDefault } from 'src/app/models/admission.model';
import { ParentDetail, ParentDetailDefault } from 'src/app/models/parent-detail.model';

@Component({
  selector: 'app-parent-registration',
  templateUrl: './parent-registration.component.html',
  styleUrls: ['./parent-registration.component.css']
})
export class ParentRegistrationComponent implements OnInit {

  parentDetail: ParentDetail = ParentDetailDefault;
  currentDate: Date = new Date();
  studentId: number = 0;
  constructor(private router: Router, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.studentId = params && params['id'] ? params['id'] : 0;
    }, () => { });
  }

  ngOnInit(): void {
    let admissionsJSON: string | null = localStorage.getItem("admissions"),
      admissions: Array<Admission> = admissionsJSON ? JSON.parse(admissionsJSON) : new Array<Admission>(),
      currentAdmission = admissions.find(x => x.student.id == this.studentId);
    currentAdmission = currentAdmission ? currentAdmission : AdmissionDefault;

    this.parentDetail.student = currentAdmission.student;
    this.parentDetail.name = currentAdmission.gaurdian;
  }

  submit() {
    this.router.navigate(['/home', 'parentcorner', 'registerec', this.studentId]);
  }

}
