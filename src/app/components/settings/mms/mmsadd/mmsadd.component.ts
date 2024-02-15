import { Component, OnInit } from '@angular/core';
import { MMSSetting } from 'src/app/models/mms-seting.model';
import { MMSSettingService } from 'src/app/services/mms-setting.service';

@Component({
  selector: 'app-mmsadd',
  templateUrl: './mmsadd.component.html',
  styleUrls: ['./mmsadd.component.css']
})
export class MMSAddComponent implements OnInit {

  mmsSetting: MMSSetting = {
    id: 0,
    name: '',
    description: '',
    active: true
  };
  constructor(private mmsSettingService: MMSSettingService,) { }

  ngOnInit(): void {
  }

  save() {
    // Add your form submission logic here
    console.log('Form submitted:', this.mmsSetting);
  }

}
