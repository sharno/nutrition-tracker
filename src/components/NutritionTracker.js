import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import moment from 'moment'

import TopMenu from './TopMenu'
import Home from './Home'
import NutritionHistory from './NutritionHistory'

// just for testing purposes 
// const refreshRate = 10000

class NutritionTracker extends Component {
    componentWillMount() {
        this.handleChangeDate()
    }

    handleChangeDate = () => {
        if (!moment().startOf("day").isSame(this.props.date)) {
            // if the day of the machine is the same day saved in the state
            this.props.onChangeDate(moment().startOf("day").format())
        }
        setTimeout(
            this.handleChangeDate,
            moment().endOf("day").add(1, "second").diff(moment())
        )
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path={process.env.PUBLIC_URL + "/"} render={() => <TopMenu date={this.props.date} />} />
                        <Route exact path={process.env.PUBLIC_URL + "/"} render={() => <Home {...this.props} />} />
                        <Route exact path={process.env.PUBLIC_URL + "/history"} render={() => <NutritionHistory prevDaysMeals={this.props.prevDaysMeals} />} />
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}

export default NutritionTracker