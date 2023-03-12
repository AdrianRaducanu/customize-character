import { Component, OnInit } from '@angular/core';
import {CharacterInfoService} from "../character-info.service";
import {Subject, takeUntil} from "rxjs";
import {IAppearance} from "../interfaces";

@Component({
  selector: 'app-character-image',
  templateUrl: './character-image.component.html',
  styleUrls: ['./character-image.component.scss']
})
export class CharacterImageComponent implements OnInit {
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  characterStyle: IAppearance;

  constructor(private characterInfoService: CharacterInfoService) { }

  ngOnInit(): void {
    this.characterInfoService.getAppearanceObs()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(info => {
        this.characterStyle = info;
      })
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

}
