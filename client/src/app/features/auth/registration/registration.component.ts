import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      name: new FormControl('', [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  onSubmit(): void {
    const { email, password, name } = this.form.value;
    this.authService.createNewUser({ email, password, name }).subscribe({
      next: () => this.router.navigate(['/login'], { queryParams: { nowCanLogin: true } }),
      error: (err) => console.error(err),
    });
  }
}
