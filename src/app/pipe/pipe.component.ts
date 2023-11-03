import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  myname ="Aditya Raj";
  currentdate = new Date();
  emp ={name: 'Aditya', age:'25',
  address:{a1: 'Paris', a2:'France'}}
}


