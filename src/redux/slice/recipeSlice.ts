import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  image?: string;
  price?: number;
}

export interface RecipeState {
  recipes: Recipe[];
  isLoading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}

const initialState: RecipeState = {
  recipes: [],
  isLoading: false,
  error: null,
  page: 1,
  hasMore: true,
};

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (page: number) => {
    const response = await fetch(`https://api.example.com/recipes?page=${page}`);
    return response.json();
  }
);

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    refreshRecipes: (state) => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = [...state.recipes, ...action.payload];
        state.page += 1;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch recipes';
      });
  },
});

export const { refreshRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;