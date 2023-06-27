import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    AboutComponent,
    CvComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class ContentModule { }
