import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ta en panga!';
  items = [1,2,3];


  allowDrop(ev) {
   ev.preventDefault();
    console.log("allowDrop");
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("drago");
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));

  }
  click(){
    this.title = "click";
  }
}

