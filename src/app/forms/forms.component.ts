import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent {
    
    countryList:country[]=[
      new country("1", "India"),
      new country("2", "USA"),
      new country("1", "Japan"),
    ];

    onSubmit(contactForm: any) {
      console.log(contactForm);
    }
    OnClicked(){
      let someservice = new MyserviceService();
      someservice.OnClicked();
    }

}



export class country{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}
