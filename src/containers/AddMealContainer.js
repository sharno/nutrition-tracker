import { connect } from 'react-redux'

import { addMeal } from '../actions'
import AddMeal from '../components/AddMeal'

const mapDispatchToProps = dispatch => {
    return {
        onAddMealClick: meal => {
            dispatch(addMeal(meal))
        }
    }
}

const AddMealContainer = connect(null, mapDispatchToProps)(AddMeal)

export default AddMealContainer
