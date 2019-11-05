import { Injectable } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();
    // recipes: Recipe[] = [
    //     new Recipe(
    //  'Lørdagstaco',
    //       'Norways famous different taco',
    //  'https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg',
    //    [
    //      new Ingredient('Mais i  hermetikk', 1),
    //      new Ingredient('Pakke med revet ost', 1),
    //      new Ingredient('Paprika', 1),
    //      new Ingredient('Agurk', 1),
    //      new Ingredient('løk', 2),
    //       new Ingredient('Lefser', 10),
    //       new Ingredient('Rømme', 1),
    //       new Ingredient('Salsa', 1),
    //       new Ingredient('Tacokrydder', 1),
    //    ]),
    //     new Recipe(
    //   'Fiskegrateng',
    //   'Smak på havets goder',
    //   'https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_338,q_auto,w_601/qr0gty7lsfiwe4ctp4bh.jpg',
    //     [] )
    //   ];
    private recipes: Recipe[]= [];
      constructor(private slService: ShoppingListService){

      }

      setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
      getRecipes(){
        return  this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:  Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}