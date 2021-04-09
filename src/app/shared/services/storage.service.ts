import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  public setStorageValueByKey(key: string, value: string) : void {
    localStorage.setItem(key, value);
  }

  public getStorageValueByKey(key: string) : string {
    return localStorage.getItem(key);
  }

  public removeStorageValueByKey(key: string) : void {
    localStorage.removeItem(key);
  }

  public removeAllStorage() : void {
    localStorage.clear();
  }
}
