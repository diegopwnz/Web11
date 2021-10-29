import { Component } from '@angular/core';

const person ={
  fullName: "Иванов Иван Иваночич",
  mobilePhone: "123456789",
  city: "Madagaskar",
  imageUrl: "https://picsum.photos/512/256"

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
// person = {
// fullName: "Иванов Иван Иваночич",
// mobilePhone: "123456789",
// city: "Madagaskar",
// imageUrl: "imageUrl"
// }
// imageUrl = "https://picsum.photos/512/256"
// }

export class AppComponent {
  person = person;
  
}

