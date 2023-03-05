import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appearance-template-form',
  templateUrl: './appearance-template-form.component.html',
  styleUrls: ['./appearance-template-form.component.scss']
})
export class AppearanceTemplateFormComponent implements OnInit {
  skinColor: any;
  hairColor: any;

  constructor() { }

  ngOnInit(): void {
  }

}
