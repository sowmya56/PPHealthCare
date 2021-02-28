import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModule } from '../Modules/RegisterModule';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
   
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]] ,
      activation_status: ['',[Validators.required]],
      date_of_birth: ['',[Validators.required]]   
    });
  }
 

  constructor(private fb: FormBuilder, private service: RegisterService, private route: Router) {

  }
  OnSubmit(){
    this.route.navigate(['main']);
    const user: RegisterModule = { id:-1 ,name: this.getValue('name'),  activation_status: this.getValue('activation_status'), birth_date: this.getValue('date_of_birth')};
    console.log(this.registerForm);
    this.service.RegisterUser(user).subscribe(data => {
      
      this.route.navigate(['main']);
      // alert('Registration Successfull. Please login now.');
    } );
  }

  getValue(name: string) {

    return this.registerForm.get(name)?.value;
  }

  /**
   * registerForm: FormGroup;
   spinner = false;
   phoneflag = false;
   isLoading;

   errorMessages = {

   

  

  OnSubmit() {

    // tslint:disable-next-line: max-line-length
    const user: RegisterModule = {firstname: this.getValue('firstname'),  lastname: this.getValue('lastname'), email: this.getValue('email'), phonenumber: this.getValue('phonenumber'), password: this.getValue('password')};
    this.spinner = true;
    this.service.RegisterUser(user).subscribe(data => {
        this.spinner = false;
        this.route.navigate(['login']);
        alert('Registration Successfull. Please login now.');
      } );

    console.log(this.registerForm);
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required]] ,
      // lastname: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), Validators.minLength(3)]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required
      , Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,30}')]],
      confirmpassword: ['', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,30}')]]
    }, {validator : MustMatch('password', 'confirmpassword')}
    );
  }

  getValue(name: string) {
    return this.registerForm.get(name).value;
  }

  

  
   */


 

}
