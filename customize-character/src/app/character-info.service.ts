import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {IAppearance, IBio} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class CharacterInfoService {

  private appearanceSubject$: BehaviorSubject<IAppearance> = new BehaviorSubject<IAppearance>({
    hairColor: "#000000",
    skinColor: "#f9ddb7",
    gender: "boy"
  });

  private bioSubject$: Subject<IBio> = new Subject<IBio>();

  constructor() { }

  getAppearanceObs(): Observable<IAppearance> {
    return this.appearanceSubject$.asObservable();
  }

  setAppearanceObs(element: IAppearance) {
    this.appearanceSubject$.next(element);
  }

  getBioObs(): Observable<IBio> {
    return this.bioSubject$.asObservable();
  }

  setBioObs(element: IBio) {
    console.log("A+SET")
    this.bioSubject$.next(element);
  }
}
