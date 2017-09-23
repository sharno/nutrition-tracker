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
        if (! moment().startOf("day").isSame(this.props.date)) {
            this.props.onChangeDate(moment().format())
        }
    }

    componentDidMount() {
        setTimeout(
            () => {
                this.handleChangeDate()
            },
            moment().endOf("day").add(1, "second").diff(moment())
            // refreshRate
        )
    }

    handleChangeDate = () => {
        this.props.onChangeDate(moment().format())
        // this.props.onChangeDate(moment(this.props.date).add(1, "day").format())
        setTimeout(
            () => {
                this.handleChangeDate()
            },
            moment().endOf("day").add(1, "second").diff(moment())
            // refreshRate
        )
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" render={() => <TopMenu date={this.props.date} />} />
                        {/* <TopMenu path="/" date={this.props.date} /> */}
                        <Route exact path="/" component={Home} />
                        <Route exact path="/history" render={() => <NutritionHistory prevDaysMeals={this.props.prevDaysMeals} />} />
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}

export default NutritionTracker