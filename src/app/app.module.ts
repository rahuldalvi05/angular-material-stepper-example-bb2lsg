import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {MatStepperModule  } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRippleModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { WithMaterialComponent } from './withmaterial/withmaterial.component';
import { PlainComponent } from './plain/plain.component';

const appRoutes: Routes = [
  { path: 'plain', component: PlainComponent },
  { path: 'material', component: WithMaterialComponent }
];

@NgModule({
  imports: [BrowserModule,MatStepperModule,MatIconModule,ReactiveFormsModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatToolbarModule, BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      })],
  declarations: [AppComponent, WithMaterialComponent, PlainComponent],
  bootstrap: [AppComponent],
  exports: [ RouterModule]
})
export class AppModule { }
