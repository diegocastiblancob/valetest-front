import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { applyTheme } from 'projects/valetest/src/app/styleLoad';

@Component({
  selector: 'app-system-design',
  templateUrl: './system-design.component.html',
  styleUrls: ['./system-design.component.scss']
})
export class SystemDesignComponent {
  lookAndFeelForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.lookAndFeelForm = this.fb.group({
      // colorPrimary: ['#F4F4F4', Validators.required],
      // colorSecondary: ['#1A0C3F', Validators.required],
      // colorTertiary: ['#F9BE2D', Validators.required],
      colorPrimary: new FormControl('', Validators.required),
      colorSecondary: new FormControl('', Validators.required),
      colorTertiary: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if(this.lookAndFeelForm.invalid) return;
    const theme: any = {
      primaryColor: this.lookAndFeelForm.get('colorPrimary')?.value,
      secondaryColor: this.lookAndFeelForm.get('colorSecondary')?.value,
      tertiaryColor: this.lookAndFeelForm.get('colorTertiary')?.value
    };
    console.log(theme);
    applyTheme(theme);
  }
}
