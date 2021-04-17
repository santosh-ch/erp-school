import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-extra-curriculars',
  templateUrl: './register-extra-curriculars.component.html',
  styleUrls: ['./register-extra-curriculars.component.css']
})
export class RegisterExtraCurricularsComponent implements OnInit {

  regForm: FormGroup;
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
  }

}
