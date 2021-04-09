import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataOutputRoutingModule } from './data-output-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DataViewComponent } from './data-view/data-view.component';


@NgModule({
  declarations: [ DataViewComponent ],
  imports: [
    CommonModule,
    SharedModule,
    DataOutputRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [ ]
})
export class DataOutputModule { }
