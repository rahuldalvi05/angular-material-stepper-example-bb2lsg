import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'with-material-app',
  templateUrl: './withmaterial.component.html',
  styleUrls: ['./withmaterial.component.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class WithMaterialComponent implements OnInit {
  interests = [];

  formGroup = new FormGroup({ secondCtrl: new FormControl(''), })
  ngOnInit() {
    this.interests = [
      { value: 'reading', viewValue: 'Reading' },
      { value: 'swimming', viewValue: 'Swimming' },
      { value: 'cycling', viewValue: 'Cycling' }
    ];
  }

  count=1;
  add(){
    this.count++;
  }
  minus(){
    this.count--;
  }
}