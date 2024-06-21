import { RecipeImage, RecipeTitle, RecipeCardContainer, RecipeIngredients } from './styled.js';
import Button from '@mui/material/Button';

const RecipeCard = ({ recipe }) => {
  return (
    <RecipeCardContainer>
      <RecipeTitle>{recipe.label}</RecipeTitle>
      <RecipeImage src={recipe.image} alt={recipe.label} />
      <p>Calories: {parseInt(recipe.calories)}</p>
      <p>Number of Ingredients: {recipe.ingredients.length}</p>
      <RecipeIngredients>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </RecipeIngredients>
       <Button variant="outlined" onClick={() => window.open(recipe.url, '_blank')}>View Instructions</Button>
    </RecipeCardContainer>
  );
};

export default RecipeCard;