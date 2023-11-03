import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  post:any;
  constructor(private http:HttpClient){}

    ngOnInit(): void{
      this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data)=>this.displayPost(data))
    }
    displayPost(data:any){
      this.post = data;
    }
  }

