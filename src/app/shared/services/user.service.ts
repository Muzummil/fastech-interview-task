import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient, private configService: ConfigService) { }

  public getCountriesList(): Observable<any> {
    let url = this.configService.API_BASE_URL +  "countries";
    return this._http.get(url).pipe(map((res) => res))
  }

  public signupUser(userData: any): Observable<any> {
    let url = this.configService.API_BASE_URL +  "signup";
    return this._http.post(url, userData).pipe(map((res) => res))
  }

  public updateUserData(userData: any): Observable<any> {
    let url = this.configService.API_BASE_URL +  "signup/" + this.configService.getUserId();
    return this._http.put(url, userData).pipe(map((res) => res))
  }

  public getUserData(): Observable<any> {
    let url = this.configService.API_BASE_URL +  "signup/" + this.configService.getUserId();
    return this._http.get(url).pipe(map((res) => res))
  }

}
