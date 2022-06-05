
import { HttpModule } from "@angular/http";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesComponent } from './courses.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { StarComponent } from './star/star.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputDirective } from './input.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormComponent } from './form/form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from "./services/post.service";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SignupFormComponent,
    SummaryPipe,
    StarComponent,
    PanelComponent,
    LikeComponent,
    InputDirective,
    ZippyComponent,
    ContactFormComponent,
    FormComponent,
    NewCourseFormComponent,
    ChangepasswordComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
