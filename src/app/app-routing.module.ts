import { NgModule, Injectable } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AboutComponent } from './content/about/about.component';
import { CvComponent } from './content/cv/cv.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { PageNotFoundComponent } from './core/pagenotfound/pagenotfound.component';
import { BrowserModule } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Timothy Catibog | ${title}`);
    }
  }
}

const providers = {
  provide: TitleStrategy,
  useClass: TemplatePageTitleStrategy
}

const routes: Routes = [
  { path: 'about', title: 'About Me', component: AboutComponent },
  { path: 'cv', title: 'Curriculum Vitae', component: CvComponent },
  { path: 'projects', title: 'Projects', component: ProjectsComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [providers],
})
export class AppRoutingModule { }
