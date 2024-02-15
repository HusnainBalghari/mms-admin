import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MMSSettingComponent } from './mms/mmssetting.component';
import { MMSDetailsComponent } from './mms/mmsdetails/mmsdetails.component';
import { MMSAddComponent } from './mms/mmsadd/mmsadd.component';
import { PharmacySettingComponent } from './pharmacy-setting/pharmacy-setting.component';
import { AddPharmacyComponent } from './pharmacy-setting/add-pharmacy/add-pharmacy.component';

const settingRoutes: Routes = [
  { path: 'mmssetting', component: MMSSettingComponent, data: { breadcrumb: 'MMS Setting'} },
  { path: 'mmssdetails/:id', component: MMSDetailsComponent, data: { breadcrumb: 'MMS Detail'} },
  { path: 'addmms', component: MMSAddComponent, data: { breadcrumb: 'Add MMS'} },
  { path: 'pharmacysetting', component: PharmacySettingComponent, data: { breadcrumb: 'Pharmacy'} },
  { path: 'addpharmacy', component: AddPharmacyComponent, data: { breadcrumb: 'Add Pharmacy'} },
  { path: '', redirectTo: '/mmssetting', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(settingRoutes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}