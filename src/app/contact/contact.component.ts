import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      contactEmail: new FormControl(null, [Validators.required, Validators.email]),
      contactPhone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]),
      contactMessage: new FormControl(null, Validators.required)
    });
  }
  
  get name() {
    return this.contactForm.get('name') as FormControl;
  }
  get contactEmail() {
    return this.contactForm.get('contactEmail') as FormControl;
  }
  get contactPhone() {
    return this.contactForm.get('contactPhone') as FormControl;
  }
  get contactMessage() {
    return this.contactForm.get('contactMessage') as FormControl;
  }


  onSubmit(){
    console.log(this.contactForm);
  }
}
