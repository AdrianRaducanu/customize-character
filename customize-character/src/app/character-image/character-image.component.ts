import { Component, OnInit } from '@angular/core';
import {CharacterInfoService} from "../character-info.service";
import {Subject, takeUntil} from "rxjs";
import {IAppearance, IBio} from "../interfaces";

@Component({
  selector: 'app-character-image',
  templateUrl: './character-image.component.html',
  styleUrls: ['./character-image.component.scss']
})
export class CharacterImageComponent implements OnInit {
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  characterStyle: IAppearance;
  characterBio: IBio;

  constructor(private characterInfoService: CharacterInfoService) { }

  ngOnInit(): void {
    this.characterInfoService.getAppearanceObs()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(info => {
        this.characterStyle = info;
      });
    this.characterInfoService.getBioObs()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(bio => {
        this.characterBio = bio;
      })
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

}
