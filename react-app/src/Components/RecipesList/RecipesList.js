import React from 'react';
import { RecipeListContainer, RecipeListWrapper } from './styled.js';
import RecipeCard from '../RecipeCard/RecipeCard.js';

const RecipeList = ({ recipes, totalResults, searched }) => {
  return (
    <RecipeListContainer>
      <h1>Search Results</h1>
      {totalResults > 0 ? (
        <>
          <RecipeListWrapper>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.url} recipe={recipe} />
            ))}
          </RecipeListWrapper>
        </>
      ) : (
        searched && <p>No recipes found. Please choose another ingredient.</p>
      )}
    </RecipeListContainer>
  );
};

export default RecipeList;
