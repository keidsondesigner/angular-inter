import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showAmount!: boolean;
	formLogin!: FormGroup;

	constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.initForm();
  }

	ngOnInit(): void {
	}

	toggleShowAmount() {
		this.showAmount = !this.showAmount;
		// this.eventChange.emit(this.showAmount);
	}

	initForm() {
		this.formLogin = this.formBuilder.group({
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

  // acesso aos controls do formulário
  get f() { return this.formLogin.controls; }

	onSubmit() {
		this.router.navigate(['/dashboard']);
	}

}
