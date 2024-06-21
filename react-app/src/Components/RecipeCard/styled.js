import styled from 'styled-components';

export const RecipeCardContainer = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const RecipeTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.1em;
`;

export const RecipeIngredients = styled.ul`
  text-align: left;
`;
