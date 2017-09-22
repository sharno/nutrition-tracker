import * as actions from './actions'

const initialState = {
    todaysDate: "2017-09-21",
    todaysMeals: [
        {
            time: "2017-09-21 09:30:26",
            name: "Breakfast",
            img: "",
            serving: {
                vegetable: 0,
                protein: 1,
                fat: 2,
                carb: 10,
                drink: 0,
            },
        },
    ],
    prevDaysMeals: {},
}

export default function nutritionTrackerApp(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_MEAL:
            console.log({
                ...state,
                todaysMeals: [...state.todaysMeals, { ...action.meal }],
            })
            return {
                ...state,
                todaysMeals: [...state.todaysMeals, { ...action.meal }],
            }
        case actions.CHANGE_DATE:
            return {
                todaysMeals: {},
                prevDaysMeals: {
                    ...state.prevDaysMeals,
                    date: { ...state.todaysMeals },
                }
            }
        default:
            return state
    }
}
