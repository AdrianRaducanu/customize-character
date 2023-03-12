import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {IAppearance} from "../interfaces";
import {CharacterInfoService} from "../character-info.service";

@Component({
  selector: 'app-appearance-template-form',
  templateUrl: './appearance-template-form.component.html',
  styleUrls: ['./appearance-template-form.component.scss']
})
export class AppearanceTemplateFormComponent implements OnInit {
  //Use for unsubscribe -> when we put 'true' on this subject -> the subscription of an observable is destroyed
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  characterStyle: IAppearance = {
    hairColor: "#000000",
    skinColor: "#f9ddb7",
    gender: "boy"
  }

  @ViewChild('myForm', {static: true}) myForm: NgForm;

  constructor(private characterInfoService: CharacterInfoService) {
  }

  ngOnInit(): void {
    this.myForm.form.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(form => {
        this.characterInfoService.setAppearanceObs(form);
      })
  }

  showForm() {
    console.log(this.myForm)
  }


  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
