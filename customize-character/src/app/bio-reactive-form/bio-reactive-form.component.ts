import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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
    })
    this.bioForm = this.fb.group({
      firstName: '',
      lastName: '',
      city: 'south park',
      address: addressNestForm
    });

    this.bioForm.valueChanges.subscribe(change => console.log(change));

  }

}
