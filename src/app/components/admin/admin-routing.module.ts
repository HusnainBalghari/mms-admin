import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const adminRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: "Today's Dashboard"} },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}