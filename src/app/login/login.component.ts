import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    public afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
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

  tryLogin() {
    const {email, password} = this.loginForm.value;
    this.afAuth.auth.signInWithEmailAndPassword(String(email), String(password))
      .then(res => {
        console.log(res);
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }

  ngOnInit() {
  }

}
