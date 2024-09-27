import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }


  public onButtonClick() {
    console.log("Clicked");
    this.router.navigate(['design/dhr']);
  }

}
