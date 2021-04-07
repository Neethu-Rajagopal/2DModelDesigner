import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigureService {
  configureTabSubject = new BehaviorSubject({ tabName: '' });

  constructor() { }
}
