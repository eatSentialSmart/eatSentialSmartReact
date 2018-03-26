import React from 'react';
import { Item } from 'semantic-ui-react';
import RecipeList from './recipe_list';

const Recipe = props => {
    const recipeItem = props.recipes.map((recipe, i) => {
        return (
            <RecipeList
                key={i + 1}
                num={i + 1}
                title={recipe.recipe.label}
                src={recipe.recipe.image}
                source={recipe.recipe.source}
                health={recipe.recipe.healthLabels}
                calories={recipe.recipe.calories}
                ingredients={recipe.recipe.ingredientLines}
                diet={recipe.recipe.dietLabels}
                url={recipe.recipe.url}
            />
        )
    })

    return (
        <div style={{ marginBottom: 40 }}>
            <Item.Group divided>
                {recipeItem}
            </Item.Group>
        </div>
    )
}

export default Recipe;