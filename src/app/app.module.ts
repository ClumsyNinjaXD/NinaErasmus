import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { AboutComponent } from './about/about.component';
import { DesignPortfolioComponent } from './design-portfolio/design-portfolio.component';
import { ProjectPortfolioComponent } from './project-portfolio/project-portfolio.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RootLayoutComponent } from './root-layout/root-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    AboutComponent,
    DesignPortfolioComponent,
    ProjectPortfolioComponent,
    NavigationComponent,
    RootLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
