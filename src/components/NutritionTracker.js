import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

import AddMealContainer from '../containers/AddMealContainer'
import MealsListContainer from '../containers/MealsListContainer'
import TopMenu from './TopMenu'

const NutritionTracker = () => (
    <div>
        <TopMenu />
        <Container style={{ marginTop: '7em' }}>
            <AddMealContainer />
        </Container>
        <Divider />
        <MealsListContainer />
    </div>
)

export default NutritionTracker