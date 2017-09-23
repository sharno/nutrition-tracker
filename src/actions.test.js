import * as actions from './actions'

describe('actions', () => {
    it('should create an action to add a meal', () => {
        const meal = {
            "name": "Breakfast",
            "time": "2017-09-22T22:47:50-04:00",
            "img": "",
            "serving": { "vegetable": 4, "protein": 0, "fat": 0, "carb": 0, "drink": 0 }
        }
        const expectedAction = {
            type: actions.ADD_MEAL,
            meal
        }
        expect(actions.addMeal(meal)).toEqual(expectedAction)
    })

    it('should create an action to change date', () => {
        const date = '2017-09-22T00:00:00-04:00'
        const expectedAction = {
            type: actions.CHANGE_DATE,
            date
        }
        expect(actions.changeDate(date)).toEqual(expectedAction)
    })
})
