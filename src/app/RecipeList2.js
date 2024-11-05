import { recipes } from './recipes.js';

export default function RecipeList2() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map(recipe =>
        {return Recipe(recipe.id, recipe.name, recipe.ingredients)}
      )}
    </div>
  );
}

function Recipe(id, name, ingredients){
  return(
      <div key={id}>
        <h2>{name}</h2>
        <ul>
          {ingredients.map(ingredient =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
      </div>
  );
}
