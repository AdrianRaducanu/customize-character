import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IAppearance} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class CharacterInfoService {

  private appearanceSubject$: BehaviorSubject<IAppearance> = new BehaviorSubject<IAppearance>({
    hairColor: "#000000",
    skinColor: "#f9ddb7",
    gender: "boy"
  });

  constructor() { }

  getAppearanceObs(): Observable<IAppearance> {
    return this.appearanceSubject$.asObservable();
  }

  setAppearanceObs(element: IAppearance) {
    this.appearanceSubject$.next(element);
  }
}
