import { recipes } from './recipes.js';

export function Receta(recipes){
  return(
    <div>
      {recipes.map(recipe =>
      <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map(ingredient =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
      </div>
      )}
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recetas</h1>
      {Receta(recipes)}
    </div>
  );
}
