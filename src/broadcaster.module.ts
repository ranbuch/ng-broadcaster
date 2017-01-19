import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BroadcasterService } from './broadcaster.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [BroadcasterService]
})
export class BroadcasterModule { }