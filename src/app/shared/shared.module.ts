import { BadgevalueSelectionComponent } from './directives/badgevalue-selection/badgevalue-selection.component';
import { ProgressbarComponent } from './directives/progressbar/progressbar.component';
import { UserService } from './services/user.service';
import { DropdonwSelectBoxComponent } from './directives/dropdown-selectbox/dropdown-selectbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './directives/top-header/top-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {NgbProgressbarConfig, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from './services/config.service';
import { StorageService } from './services/storage.service';
@NgModule({
  declarations: [ TopHeaderComponent, DropdonwSelectBoxComponent, ProgressbarComponent, BadgevalueSelectionComponent ],
  providers: [ ConfigService, UserService, StorageService, NgbProgressbarConfig ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbProgressbarModule
  ],
  exports: [ DropdonwSelectBoxComponent, ProgressbarComponent, BadgevalueSelectionComponent ]
})
export class SharedModule { }
