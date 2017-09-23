import { connect } from 'react-redux'

import { changeDate } from '../actions'
import NutritionTracker from '../components/NutritionTracker'

const mapStateToProps = state => {
    return {
        date: state.date,
        prevDaysMeals: state.prevDaysMeals,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeDate: date => {
            dispatch(changeDate(date))
        }
    }
}

const NutritionTrackerContainer = connect(mapStateToProps, mapDispatchToProps)(NutritionTracker)

export default NutritionTrackerContainer
