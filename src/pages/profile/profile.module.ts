import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
// import {SharedModule} from '../../directives/shared.module'

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    // SharedModule
  ],
})
export class ProfilePageModule {}
