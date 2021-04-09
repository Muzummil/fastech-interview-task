import { StorageService } from 'src/app/shared/services/storage.service';
import { Injectable } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane, faAngleDown, faThLarge, faTimes, faSearch, faCheckDouble, faPencilAlt, faWaveSquare, faSquare, faInfoCircle, faCheck, faWindowMaximize, faCalendarCheck, faThumbsDown, faLifeRing } from "@fortawesome/free-solid-svg-icons";

@Injectable()
export class ConfigService {

  public API_BASE_URL = "https://5d0925e5034e500014010f80.mockapi.io/interview/";

  public faWaveSquare = faWaveSquare;
  public faThLarge = faThLarge;
  public faPaperPlane = faPaperPlane;
  public faInfoCircle = faInfoCircle;
  public faCheck = faCheck;
  public faWindowMaximize = faWindowMaximize;
  public faSquare = faSquare;
  public faSearch = faSearch;
  public faPencilAlt = faPencilAlt;
  public faCheckDouble = faCheckDouble;
  public faCalendarCheck = faCalendarCheck;
  public faAngleDown = faAngleDown;
  public faThumbsUp = faThumbsUp;
  public faThumbsDown = faThumbsDown;
  public faLifeRing = faLifeRing;


  constructor(private storageService: StorageService) { }

  public getUserId(): string {
    return this.storageService.getStorageValueByKey('id');
  }

}
