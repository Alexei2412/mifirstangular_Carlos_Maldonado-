import { Component, computed, input } from '@angular/core';
import { RECIPES_LIST_DATA } from '../data/recipes-list-data';

@Component({
  selector: 'app-recipes-details',
  imports: [],
  templateUrl: './recipes-details.html',
  styleUrl: './recipes-details.css',
})
export class RecipesDetailsComponent {
  id = input<string>();

  recipesList = RECIPES_LIST_DATA;

  filterRecipesList = computed(() => {
    return this.recipesList.recipes.filter((x) => x.id === Number(this.id()));
  });
}