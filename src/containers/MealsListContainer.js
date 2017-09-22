import { connect } from 'react-redux'

import MealsList from '../components/MealsList'

const mapStateToProps = state => {
    return {
        meals: state.meals,
    }
}

const MealsListContainer = connect(mapStateToProps)(MealsList)

export default MealsListContainer
