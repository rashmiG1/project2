import { Component } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RouterOutlet } from '@angular/router';
import {ProductsComponent} from '../products/products.component';
import {UsersComponent} from '../users/users.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { CareerComponent } from '../career/career.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent, UsersComponent, ProductDetailsComponent, NavbarComponent,HomeComponent,
    AboutComponent, CareerComponent, UsersComponent, 
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
