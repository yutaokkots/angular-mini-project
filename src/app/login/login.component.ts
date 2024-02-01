import { Component, OnInit} from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

// OnInit interface is part of Angular Core Package
export class LoginComponent implements OnInit{
  ngOnInit(): void {}

  onSubmit(form: NgForm){
    console.log(form)
    
  }

}
