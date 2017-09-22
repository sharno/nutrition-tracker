import { connect } from 'react-redux'

import MealsList from '../components/MealsList'

const mapStateToProps = state => {
    console.log(state.todaysMeals)
    return {
        meals: state.todaysMeals,
    }
}

const MealsListContainer = connect(mapStateToProps)(MealsList)

export default MealsListContainer
