import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MMSSetting, MMSSettingDetails } from 'src/app/models/mms-seting.model';
import { MMSSettingService } from 'src/app/services/mms-setting.service';

@Component({
  selector: 'app-mmsdetails',
  templateUrl: './mmsdetails.component.html',
  styleUrls: ['./mmsdetails.component.css']
})
export class MMSDetailsComponent implements OnInit {
  id: any = 0;
  mmsSetting: MMSSetting = {
    id: 0,
    name: '',
    description: '',
    active: false
  };

  mmsSettingDetails: MMSSettingDetails[] = []

  constructor(private route: ActivatedRoute, private mmsSettingService: MMSSettingService) {

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.init(this.id);
    }

  }

  init(id: number) {
    this.loadMMSSettings(id);
  }

  loadMMSSettings(id: number) {
    // let getAllCabs = this.mmsSettingService.Get(id).subscribe((settings: MMSSetting) => {
    //   this.mmsSetting = settings;
    //   getAllCabs.unsubscribe();
    // });

    this.mmsSetting = { id: 1, name: 'John Dow AA', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum", active: true }
  }

  addNewDetail(){
    this.mmsSettingDetails.push({id:0, fieldName: "", fieldValue: '', active: true})
  }

  save() {
    // Add your form submission logic here
    console.log('Form submitted:', this.mmsSetting);
    console.log('Form submitted:', this.mmsSettingDetails);
  }

  saveDetail(detail: MMSSettingDetails){
    console.log("Save detail: ", detail)
  }

  deleteDetail(id: number){
    console.log("Delete detail: ", id)
  }

}
