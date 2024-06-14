import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../model/user';
import { AlertifyService } from '../services/alertify.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user!: User;
  userSubmitted!: boolean;
  constructor(private fb: FormBuilder, 
              private userService: UserServiceService, 
              private alertify: AlertifyService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      userName: new FormControl (null, Validators.required),
      fullName: new FormControl (null, Validators.required),
      userEmail: new FormControl (null, [Validators.required, Validators.email]),
      userPhone: new FormControl (null, [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]),
      userPassword: new FormControl (null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl (null, [Validators.required])
    }, this.passwordMatchValidator)
  };
  
  passwordMatchValidator(fg: AbstractControl): ValidationErrors | null {
    const userPassword = fg.get('userPassword');
    const confirmPassword = fg.get('confirmPassword');
    if (userPassword && confirmPassword && userPassword.value === confirmPassword.value) {
      return null;
    } else {
      return { notmatched: true };
    }
  }

  get userName() {
    return this.registerForm.get('userName') as FormControl;
  }

  get fullName() {
    return this.registerForm.get('fullName') as FormControl;
  }

  get userEmail() {
    return this.registerForm.get('userEmail') as FormControl;
  }

  get userPhone() {
    return this.registerForm.get('userPhone') as FormControl;
  }

  get userPassword() {
    return this.registerForm.get('userPassword') as FormControl;
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  onSubmit(){
    console.log(this.registerForm.value);
    this.userSubmitted = true;
    if(this.registerForm.valid)
      {
        this.userService.addUser(this.userData());
        this.registerForm.reset();
        this.userSubmitted = false;
        this.alertify.success('Registered Successfully');
      }
    else{
        this.alertify.error('Please Provide the Required Fields');
      }
  }

  userData(): User{
    return this.user = {
      userName: this.userName.value,
      fullName: this.fullName.value,
      userEmail: this.userEmail.value,
      userPhone: this.userPhone.value,
      userPassword: this.userPassword.value,
      confirmPassword: this.confirmPassword.value
  }
  }
}
