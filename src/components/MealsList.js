import React from 'react'
import { Container, Item, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import Meal from './Meal'

const MealsList = ({ meals }) => (
    <Container>
        <Label ribbon>{meals.length === 0 ? "You didn't have any meals so far today :(" : "Bon appetit"}</Label>
        <Item.Group>
            {meals.slice(0).reverse().map(meal => (
                <Meal key={meal.time} {...meal} />
            ))}
        </Item.Group>
    </Container>
)

MealsList.propTypes = {
    meals: PropTypes.arrayOf(
        PropTypes.shape({
            time: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            serving: PropTypes.object.isRequired,
            img: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
}

export default MealsList
