import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  public userData: any = null;
  constructor(public userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData(): void {
    this.userService.getUserData().subscribe(res=>{
      this.userData = res;
      console.log(this.userData);
    });
  }

  onBack(): void {
    this._router.navigate(['data-input']);
  }

}
