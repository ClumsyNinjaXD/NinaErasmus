import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { DesignPortfolioComponent } from './design-portfolio/design-portfolio.component';
import { ProjectPortfolioComponent } from './project-portfolio/project-portfolio.component';

const routes: Routes = [
  {path: '',  pathMatch: 'prefix', redirectTo: 'about'},
  { path: 'about', component: AboutComponent },
  { path: 'cv', component: CvComponent },
  { path: 'design-portfolio', component: DesignPortfolioComponent },
  { path: 'project-portfolio', component: ProjectPortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
