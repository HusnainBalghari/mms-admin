import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'settings', loadChildren: () => import('./components/settings/settings.module').then((m) => m.CoreModule), canActivate: [AuthGuard], data: { breadcrumb: 'Setting'} },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule), canActivate: [AuthGuard], data: { breadcrumb: 'Home'} },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default redirect to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
