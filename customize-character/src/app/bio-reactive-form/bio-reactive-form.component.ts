import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CharacterInfoService} from "../character-info.service";
import {IBio} from "../interfaces";

@Component({
  selector: 'app-bio-reactive-form',
  templateUrl: './bio-reactive-form.component.html',
  styleUrls: ['./bio-reactive-form.component.scss']
})
export class BioReactiveFormComponent implements OnInit {

  bioForm: FormGroup;

  constructor(private fb: FormBuilder, private characterInfoService: CharacterInfoService) { }

  ngOnInit(): void {
    const addressNestForm = this.fb.group({
      street: ['', [
        Validators.required
      ]],
      number: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
    });

    this.bioForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.pattern('^[A-Z][A-Za-zñÑáéíóúÁÉÍÓÚ ]+$') //one word, only letters, capital letter, more than one letter
      ]],
      lastName: ['', [
        Validators.required,
        Validators.pattern('^[A-Z][A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')
      ]],
      city: ['South Park',[
        Validators.required
      ]],
      address: addressNestForm,
      friends: this.fb.array([])
      // friends: this.fb.array([],[Validators.required])
    });

    // this.bioForm.valueChanges.subscribe(change => console.log(change));

  }

  get friendsField() {
    return this.bioForm.get('friends') as FormArray;
  }
  //
  // get friendsValue() {
  //   return this.bioForm.get('friends').value;
  // }
  //
  // get firstNameValue() {
  //   return this.bioForm.get('firstName').value;
  // }
  // get lastNameValue() {
  //   return this.bioForm.get('lastName').value;
  // }
  // get cityValue() {
  //   return this.bioForm.get('city').value;
  // }
  //
  // get addressValue() {
  //   return this.bioForm.get('address').value;
  // }


  addFriendsField() {
    const friend = this.fb.group({
      firstNameFriend: ['', [
        Validators.required,
        Validators.pattern('^[A-Z][A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')
      ]],
      lastNameFriend: ['', [
        Validators.required,
        Validators.pattern('^[A-Z][A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')
      ]]
    });
    this.friendsField.push(friend);
  }

  deleteFriendsField(i) {
    this.friendsField.removeAt(i);
  }

  sendInfo({value, valid}) {
    console.log(value, valid)
    if(valid) {
      this.characterInfoService.setBioObs(value as IBio);
    }
  }

}
