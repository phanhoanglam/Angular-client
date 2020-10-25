import { DashboardLayoutModule } from './modules/dashboard/dashboard-layout.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {JobRoutes} from '@config/routes';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: JobRoutes.home, redirectTo: '', pathMatch: 'full'
  },
  {
    path: JobRoutes.basePath,
    loadChildren: () => import('./modules/jobs/jobs.module').then(m => m.JobsModule)
  },
  {
    path: JobRoutes.jobMapsPath,
    loadChildren: () => import('./modules/job-maps/job-maps.module').then(m => m.JobMapsModule)
  },
  {
    path: JobRoutes.dashboardPath,
    loadChildren: () => import('./modules/dashboard/dashboard-layout.module').then(m => m.DashboardLayoutModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
