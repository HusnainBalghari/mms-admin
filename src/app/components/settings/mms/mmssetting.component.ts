import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MMSSetting } from 'src/app/models/mms-seting.model';
import { MMSSettingService } from 'src/app/services/mms-setting.service';

@Component({
  selector: 'app-mmssetting',
  templateUrl: './mmssetting.component.html',
  styleUrls: ['./mmssetting.component.css']
})
export class MMSSettingComponent implements OnInit {

  mmsSetting: MMSSetting[] = []

  constructor(private mmsSettingService: MMSSettingService, 
    private router: Router) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.loadMMSSettings();
  }

  loadMMSSettings() {
    // let getAllCabs = this.mmsSettingService.GetAll().subscribe((settings: MMSSetting[]) => {
    //   this.mmsSetting = settings;
    //   getAllCabs.unsubscribe();
    // });

    this.mmsSetting = [
      { id: 1, name: 'John Dow AA', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum", active: true },
      { id: 2, name: 'Jane', description: '',active: false },
      { id: 3, name: 'Bob', description: '',active: true },
      { id: 4, name: 'Alice', description: '',active: false },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
      { id: 5, name: 'Charlie', description: ' Test Description',active: true },
    ]
  }

  gotToDetails(id: number){
    this.router.navigate(['/settings/mmssdetails', id]);
  }

}
