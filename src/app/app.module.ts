import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdmissionModule } from './admission/admission.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentCornerModule } from './parent-corner/parent-corner.module';
import { StaffModule } from './staff/staff.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdmissionModule,
    ParentCornerModule,
    StaffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
