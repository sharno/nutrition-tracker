import React from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'

import AddMealContainer from '../containers/AddMealContainer'
import MealsListContainer from '../containers/MealsListContainer'
import AchievementsContainer from '../containers/AchievementsContainer'
import TopMenu from './TopMenu'

const NutritionTracker = () => (
    <div>
        <TopMenu />
        <Grid container columns={2}>
            <Grid.Row style={{ marginTop: '7em' }}>
                <Container textAlign='center'>
                    <AddMealContainer />
                </Container>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={10}>
                    <MealsListContainer />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Segment>
                        <AchievementsContainer />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default NutritionTracker