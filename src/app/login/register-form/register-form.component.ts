import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/_services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerUserData={};
  constructor(private RegisterService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser()
  {

    this.RegisterService.registerUser(this.registerUserData).subscribe(
      res=>console.log(res),
      err=> console.log(err)
    )

  }

  onFormRegister(form: NgForm): void { 
    console.log(form.value);
    // this.router.navigateByUrl('/home')
    // this.product = {...form.value};
    // this.product.paymentTypes = this.paymentTypes;
  }
}
