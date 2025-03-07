import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  title:String = '';
  url:string="";
  username:String = '';

  constructor(){
    this.title = "Ravendra Hero";
    this.url="https://www.restoftech.com/assets/images/montor/rishi.png";
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  getValue(){
    this.username = "Redmi"
  }
}
