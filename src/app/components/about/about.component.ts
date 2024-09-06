import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private router: Router) { };

  doSomethingAndGoToCareers() {
    console.log('Do Something....');
    this.router.navigate(['/careers']);
  }
}
