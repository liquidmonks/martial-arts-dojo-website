import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { NewsEventsComponent } from './pages/news-events/news-events.component';
import { SeminarsComponent } from './pages/seminars/seminars.component';
import { InstructorsComponent } from './pages/instructors/instructors.component';
import { VisitComponent } from './pages/visit/visit.component';
import { StorefrontComponent } from './pages/storefront/storefront.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'news-events', component: NewsEventsComponent },
  { path: 'seminars', component: SeminarsComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'visit', component: VisitComponent },
  { path: 'storefront', component: StorefrontComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
