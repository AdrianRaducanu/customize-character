import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

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
      street: '',
      number: '',
    });

    this.bioForm = this.fb.group({
      firstName: '',
      lastName: '',
      city: 'south park',
      address: addressNestForm,
      friends: this.fb.array([])
    });

    this.bioForm.valueChanges.subscribe(change => console.log(change));

  }

  get friendsField() {
    return this.bioForm.get('friends') as FormArray;
  }

  addFriendsField() {
    const friend = this.fb.group({
      firstNameFriend: '',
      lastNameFriend: ''
    });
    this.friendsField.push(friend);
  }

  deleteFriendsField(i) {
    this.friendsField.removeAt(i);
  }

  showForm() {
    console.log(this.bioForm)
  }

}
