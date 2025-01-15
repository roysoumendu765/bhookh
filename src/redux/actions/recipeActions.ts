import { Recipe } from '../types/recipeTypes';

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const REFRESH_RECIPES = 'REFRESH_RECIPES';

interface FetchRecipesRequestAction {
  type: typeof FETCH_RECIPES_REQUEST;
}

interface FetchRecipesSuccessAction {
  type: typeof FETCH_RECIPES_SUCCESS;
  payload: Recipe[];
}

interface FetchRecipesFailureAction {
  type: typeof FETCH_RECIPES_FAILURE;
  payload: string;
}

interface RefreshRecipesAction {
  type: typeof REFRESH_RECIPES;
}

export type RecipeActionTypes =
  | FetchRecipesRequestAction
  | FetchRecipesSuccessAction
  | FetchRecipesFailureAction
  | RefreshRecipesAction;