import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  register(): void {
    console.log('fom value is', this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe(next => {
      console.log('registration passed');
      console.log(next);
    }, error => {
      console.log('registration failed');
      console.log(error);
    });
  }

  cancel(): void {
    console.log('emit the event');
    this.cancelRegister.emit(false);
  }


}
