import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-bio-reactive-form',
  templateUrl: './bio-reactive-form.component.html',
  styleUrls: ['./bio-reactive-form.component.scss']
})
export class BioReactiveFormComponent implements OnInit {

  bioForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
        Validators.pattern('^[A-Z][a-zñÑáéíóúÁÉÍÓÚ ]+$') //one word, only letters, capital letter, more than one letter
      ]],
      lastName: ['', [
        Validators.required,
        Validators.pattern('^[A-Z][a-zñÑáéíóúÁÉÍÓÚ ]+$')
      ]],
      city: ['south park',[
        Validators.required
      ]],
      address: addressNestForm,
      friends: this.fb.array([],[Validators.required])
    });

    this.bioForm.valueChanges.subscribe(change => console.log(change));

  }

  get friendsField() {
    return this.bioForm.get('friends') as FormArray;
  }

  addFriendsField() {
    const friend = this.fb.group({
      firstNameFriend: ['', [
        Validators.required,
        Validators.pattern('^[A-Z][a-zñÑáéíóúÁÉÍÓÚ ]+$')
      ]],
      lastNameFriend: ['', [
        Validators.required,
        Validators.pattern('^[A-Z][a-zñÑáéíóúÁÉÍÓÚ ]+$')
      ]]
    });
    this.friendsField.push(friend);
  }

  deleteFriendsField(i) {
    this.friendsField.removeAt(i);
  }

  showForm() {
    console.log(this.bioForm)
  }

  onSubmit({value, valid}) {
    console.log("SUBMIT",value, valid)
  }

}
