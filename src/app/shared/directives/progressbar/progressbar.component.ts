import { Component, OnInit, Input } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'progressbar',
  templateUrl: './progressbar.component.html'
})
export class ProgressbarComponent implements OnInit {
  @Input() progressbarType: string = 'info';
  @Input() progressbarPercentage: number = 20;
  @Input() progressbarAnimated: boolean = true;
  constructor(config: NgbProgressbarConfig) {
    config.max = 100;
    config.striped = true;
    config.animated = this.progressbarAnimated;
    config.type = this.progressbarType;
    config.height = '20px';
   }

  ngOnInit(): void {
  }

}
