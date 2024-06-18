import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { NewsEventsComponent } from './pages/news-events/news-events.component';
import { SeminarsComponent } from './pages/seminars/seminars.component';
import { InstructorsComponent } from './pages/instructors/instructors.component';
import { VisitComponent } from './pages/visit/visit.component';
import { StorefrontComponent } from './pages/storefront/storefront.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DonateComponent,
    ResourcesComponent,
    ClassesComponent,
    NewsEventsComponent,
    SeminarsComponent,
    InstructorsComponent,
    VisitComponent,
    StorefrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
