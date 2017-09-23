import { connect } from 'react-redux'

import { changeDate, addMeal } from '../actions'
import NutritionTracker from '../components/NutritionTracker'

const mapStateToProps = state => {
    return { ...state }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeDate: date => {
            dispatch(changeDate(date))
        },
        onAddMeal: meal => {
            dispatch(addMeal(meal))
        },
    }
}

const NutritionTrackerContainer = connect(mapStateToProps, mapDispatchToProps)(NutritionTracker)

export default NutritionTrackerContainer
