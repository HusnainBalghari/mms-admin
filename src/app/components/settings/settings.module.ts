import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MMSSettingComponent } from './mms/mmssetting.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MMSDetailsComponent } from './mms/mmsdetails/mmsdetails.component';
import { FormsModule } from '@angular/forms';
import { MMSAddComponent } from './mms/mmsadd/mmsadd.component';
import { PharmacySettingComponent } from './pharmacy-setting/pharmacy-setting.component';
import { AddPharmacyComponent } from './pharmacy-setting/add-pharmacy/add-pharmacy.component';



@NgModule({
  declarations: [
    MMSSettingComponent,
    MMSDetailsComponent,
    MMSAddComponent,
    PharmacySettingComponent,
    AddPharmacyComponent,
  ],
  imports: [
    CommonModule, 
    SettingsRoutingModule,
    FormsModule
  ]
})
export class CoreModule { }
