import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  hasChanges: boolean = false;

  submitMyForm(formData: any) {
    console.log(formData);
    this.hasChanges = false;
  }
}
