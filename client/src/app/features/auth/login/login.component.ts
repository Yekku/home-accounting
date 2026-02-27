import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Message } from '../../../core/models/message.model';
import { fadeStateTrigger } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  animations: [fadeStateTrigger],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  form!: FormGroup;
  message: Message = { type: 'danger', text: '' };

  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    if (params['nowCanLogin']) {
      this.showMessage('Now you can log in.', 'success');
    } else if (params['accessDenied']) {
      this.showMessage('You should login first.', 'warning');
    }

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit(): void {
    this.authService.login(this.form.value).subscribe({
      next: () => this.router.navigate(['/system', 'bill']),
      error: (err) => this.showMessage(err.error?.message || 'Login failed', 'danger'),
    });
  }

  private showMessage(text: string, type: string): void {
    this.message = { type, text };
    setTimeout(() => (this.message.text = ''), 5000);
  }
}
