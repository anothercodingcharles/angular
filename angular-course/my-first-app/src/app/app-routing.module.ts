import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponentComponent } from "./recipes/recipe-edit-component/recipe-edit-component.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes : Routes = [{path:'',redirectTo: '/recipes', pathMatch:'full'},
                            {path:'recipes',component: RecipesComponent, 
                                    children: [
                                        {path:'', component:RecipeStartComponent}, 
                                        {path:':id',component: RecipeDetailComponent},
                                        {path:'new',component: RecipeEditComponentComponent},
                                        {path:':id/edit',component: RecipeEditComponentComponent}
                                    ]},
                            {path:'shopping-list',component:ShoppingListComponent}]; 

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutingModule{

}