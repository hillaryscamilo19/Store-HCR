import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../../../core/services/auth/auth';
import { AuthServices } from '../../../../../core/services/auth/authServices/auth-services';

@Component({
  selector: 'app-logincomponents',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './logincomponents.html',
  styleUrl: './logincomponents.css',
})

//
export class Logincomponents {
  private fb = inject(FormBuilder);

  private authService =
    inject(AuthServices);

  private router =
    inject(Router);


  loginForm = this.fb.nonNullable.group({

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ]

  });


  loading = false;

  errorMessage = '';


  get email() {

    return this.loginForm.controls.email;

  }


  get password() {

    return this.loginForm.controls.password;

  }


  login(): void {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;

    }


    this.loading = true;

    this.errorMessage = '';


    this.authService
      .login(
        this.loginForm.getRawValue()
      )
      .subscribe({

        next: () => {

          this.loading = false;

          this.router.navigate([
            '/dashboard'
          ]);

        },


        error: (error) => {

          this.loading = false;

          console.error(
            'Login error:',
            error
          );

          if (
            error.status === 401
          ) {

            this.errorMessage =
              'Email or password incorrect.';

          } else {

            this.errorMessage =
              'Unable to connect to the server.';

          }

        }

      });

  }

}