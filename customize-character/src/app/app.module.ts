import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppearanceTemplateFormComponent } from './appearance-template-form/appearance-template-form.component';
import { BioReactiveFormComponent } from './bio-reactive-form/bio-reactive-form.component';
import { CharacterImageComponent } from './character-image/character-image.component';
import {ColorPickerModule} from "ngx-color-picker";

@NgModule({
  declarations: [
    AppComponent,
    AppearanceTemplateFormComponent,
    BioReactiveFormComponent,
    CharacterImageComponent,
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
