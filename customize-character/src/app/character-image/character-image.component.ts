import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-image',
  templateUrl: './character-image.component.html',
  styleUrls: ['./character-image.component.scss']
})
export class CharacterImageComponent implements OnInit {

  colorHair = "#fff1f3";
  constructor() { }

  ngOnInit(): void {
  }

}
