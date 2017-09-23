import React, { Component } from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'
import moment from 'moment'

import AddMealContainer from '../containers/AddMealContainer'
import MealsListContainer from '../containers/MealsListContainer'
import AchievementsContainer from '../containers/AchievementsContainer'
import TopMenu from './TopMenu'

class NutritionTracker extends Component {
    componentDidMount() {
        setTimeout(
            () => {
                this.handleChangeDate()
            },
            // moment().endOf("day").add(1, "second").diff(moment())
            5000
        )
    }

    handleChangeDate = () => {
        // this.props.onChangeDate(moment().format())
        this.props.onChangeDate(moment(this.props.date).add(1, "day").format())
        setTimeout(
            () => {
                this.handleChangeDate()
            },
            // moment().endOf("day").add(1, "second").diff(moment())
            5000
        )
    }

    render() {
        return (
            <div>
                <TopMenu date={this.props.date} />
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
    }
}

export default NutritionTracker