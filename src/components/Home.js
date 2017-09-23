import React from 'react'
import { Grid, Container, Segment } from 'semantic-ui-react'

import AddMeal from './AddMeal'
import MealsList from './MealsList'
import Achievements from './Achievements'

const Home = ({ onAddMeal, meals, achievements }) => (
    <Grid container columns={2}>
        <Grid.Row style={{ marginTop: '7em' }}>
            <Container textAlign='center'>
                <AddMeal onAddMealClick={onAddMeal} />
            </Container>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={10}>
                <MealsList meals={meals} />
            </Grid.Column>
            <Grid.Column width={6}>
                <Segment>
                    <Achievements achievements={achievements} />
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default Home