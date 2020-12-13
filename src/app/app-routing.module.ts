import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalComponent } from './digital/digital.component';
import { ExperienceComponent } from './experience/experience.component';
import { LonpacComponent } from './lonpac/lonpac.component';
import { RegionalComponent } from './regional/regional.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'referral',
    pathMatch: 'full',
  },
  {
    path: 'referral',
    component: ExperienceComponent,
  },
  {
    path: 'digital',
    component: DigitalComponent,
  },
  {
    path: 'regional',
    component: RegionalComponent,
  },
  {
    path: 'lonpac',
    component: LonpacComponent,
  },
  { path: '**', redirectTo: 'referral', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
