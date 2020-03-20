import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  recipeName = 'Lasagna';
  allowNewServer = false;

  
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

  }
 
  
  ngOnInit(): void {
  }

}
