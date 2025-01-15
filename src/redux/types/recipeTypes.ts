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