import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ta en panga!';
  items = [1,2,3];


  public allowDrop(ev) {
   ev.preventDefault();
  }

  public drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  public drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  public click(){
    alert("hola");
  }
}

