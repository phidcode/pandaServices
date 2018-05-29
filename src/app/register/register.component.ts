import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    public afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  tryGoogleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(res => {
          this.router.navigate(['/home']);
        }, err => console.log(err)
      );
  }

  tryRegister() {
    const {email, password} = this.registerForm.value;
    this.afAuth.auth.createUserWithEmailAndPassword(String(email), String(password))
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        this.registerForm.reset();
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }

  ngOnInit() {
  }

}
