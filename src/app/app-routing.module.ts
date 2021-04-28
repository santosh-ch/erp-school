import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionFormComponent } from './admission/admission-form/admission-form.component';
import { SchoolFaqsComponent } from './admission/school-faqs/school-faqs.component';
import { HomeComponent } from './home/home.component';
import { ParentRegistrationComponent } from './parent-corner/parent-registration/parent-registration.component';
import { RegisterExtraCurricularsComponent } from './parent-corner/register-extra-curriculars/register-extra-curriculars.component';
import { FormDeactivateGuard } from './shared/services/gaurds/form-deactivate.guard';
import { LoggedInUserGaurdService } from './shared/services/gaurds/logged-in-user-gaurd.service';
import { ParentUserGuard } from './shared/services/gaurds/parent-user.guard';
import { MarksEntryFormComponent } from './staff/marks-entry-form/marks-entry-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', canActivate: [LoggedInUserGaurdService], children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'admission', children: [
          { path: '', redirectTo: 'admissionform', pathMatch: 'full' },
          { path: 'admissionform', component: AdmissionFormComponent },
          { path: 'schoolfaq', component: SchoolFaqsComponent }]
      },
      {
        path: 'parentcorner', canActivateChild: [ParentUserGuard], children: [
          { path: '', redirectTo: 'parentreg', pathMatch: 'full' },
          { path: 'parentreg', component: ParentRegistrationComponent },
          { path: 'parentreg/:id', component: ParentRegistrationComponent },
          { path: 'registerec/:id', canDeactivate: [FormDeactivateGuard], component: RegisterExtraCurricularsComponent }]
      },
      {
        path: 'staff', children: [
          { path: '', redirectTo: 'marksentry', pathMatch: 'full' },
          { path: 'marksentry', component: MarksEntryFormComponent }]
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
