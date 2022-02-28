import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-padre-colores',
  templateUrl: './padre-colores.component.html',
  styleUrls: ['./padre-colores.component.css']
})
export class PadreColoresComponent implements OnInit {

  currentName = new FormControl();
  currentItemEmited = new FormControl();

  cont:number;

  constructor() {
    this.cont=0;
    this.currentName.setValue("");
  }

  // setItem(newItem: number) {
  //   this.cont+=1;
  //   this.currentItemEmited.setValue(this.cont);
  // }

  addLike(){
    this.cont+=1;
    this.currentItemEmited.setValue(this.cont);
  }

  ngOnInit(): void {
  }

}
