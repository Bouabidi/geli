import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { MaterialModule } from '@angular/material';
import { JwtHelper } from 'angular2-jwt';

import { routes } from './app.routes';
import { UserService } from './shared/user.service';
import { AuthenticationService } from './shared/authentification.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { DashboardStudentComponent } from './dashboard/dashboard-student/dashboard-student.component';
import { DashboardTeacherComponent } from './dashboard/dashboard-teacher/dashboard-teacher.component';
import { DashboardAdminComponent } from './dashboard/dashboard-admin/dashboard-admin.component';
import { CourseService, TaskService, UserDataService, LectureService } from './shared/data.service';
import { BackendService } from './shared/backend.service';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { DataService } from './shared/data.service';
import { CourseNewComponent } from './course/course-new/course-new.component';
import { TaskListComponent } from './course/course-edit/tasks/task-list.component';
import { TaskCardComponent } from './course/course-edit/tasks/task-card.component';

import { ShowProgressService } from './shared/show-progress.service';
import { UnitComponent } from './course/course-edit/unit/unit.component';
import { LectureComponent } from './lecture/lecture.component';
import { LectureNewComponent } from './lecture/lecture-new/lecture-new.component';
import { LectureEditComponent } from './lecture/lecture-edit/lecture-edit.component';
import { UploadComponent } from './upload/upload.component';
import { ManageContentComponent } from './course/course-edit/manage-content/manage-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRolesComponent } from './admin/user-roles/user-roles.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDetailsComponent,
    DashboardComponent,
    HomescreenComponent,
    RegisterComponent,
    DashboardStudentComponent,
    DashboardTeacherComponent,
    DashboardAdminComponent,
    TaskListComponent,
    TaskCardComponent,
    CourseComponent,
    CourseDetailComponent,
    CourseEditComponent,
    CourseNewComponent,
    UnitComponent,
    LectureComponent,
    LectureNewComponent,
    LectureEditComponent,
    ManageContentComponent,
    UserRolesComponent,
    UserEditComponent,
    UploadComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [UserService,
              AuthenticationService,
              AuthGuardService,
              TaskService,
              CourseService,
              UserDataService,
              LectureService,
              BackendService,
              DataService,
              ShowProgressService,
              JwtHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
