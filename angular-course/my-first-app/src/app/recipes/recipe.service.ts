import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "../shared/recipe.model";

export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe("Fresas con Crema","Fresas con Crema","https://www.isabeleats.com/wp-content/uploads/2020/01/fresas-con-crema-small-3.jpg",
        [new Ingredient('crema',1),new Ingredient('fresas',2)]),
        new Recipe("Chilaquiles Verdes","Chilaquiles Verdes","https://www.muydelish.com/wp-content/uploads/2020/08/Chilaquiles_Verdes_5.jpg",
        [new Ingredient('tortillas',10), new Ingredient('salsa',1)])
      ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes(){
         return this.recipes.slice();
    }

    getRecipeById(index: number){
        return this.recipes.slice()[index];
    }

}