import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/shared/recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  recipeDetail : Recipe;
  id : number;
  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) {
  
   }

  ngOnInit(): void {

    this.route.params.subscribe((params : Params) => {
        this.id = +params['id'];
        this.recipeDetail = this.recipeService.getRecipeById(this.id);
    });
  }
  onAddToShoppingList(){
      this.shoppingListService.addIngredients(this.recipeDetail.ingredients)
  }

}
