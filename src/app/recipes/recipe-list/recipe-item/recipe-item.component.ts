import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   
  @Input() recipe: Recipe;
  @Output() recipePicked = new EventEmitter<string>();

  constructor() { 

  }

  recipeSelected(recipeName: string) {    
    this.recipePicked.emit(recipeName);
  }
 
  
  ngOnInit(): void {
  }

}
