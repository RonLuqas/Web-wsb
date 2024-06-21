import './App.css';
import RecipeList from './Components/RecipesList/RecipesList';
import TopBar from './Components/TopBar';
import { useState, useEffect } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [searched, setSearched] = useState(false);

  const handleSearch = (ingredient) => {
    setIngredient(ingredient);
    setSearched(true);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!ingredient) return;
      const appId = '412aecfa';
      const appKey = '8b34c5de6ec78cffa35710f6de331047';
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${appId}&app_key=${appKey}`);
      const data = await response.json();
      const recipes = data.hits.map(hit => hit.recipe);
      setTotalResults(recipes.length);
      setRecipes(recipes);
    };
    fetchRecipes();
  }, [ingredient]);

  return (
    <div className="App">
      <header>
        <TopBar onSearch={handleSearch} />
      </header>
      <main>
        <RecipeList
          recipes={recipes}
          totalResults={totalResults}
          searched={searched}
        />
      </main>
    </div>
  );
}

export default App;
