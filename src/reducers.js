import * as actions from './actions'
import moment from 'moment'

const initialState = {
    date: moment().startOf("day").format(),
    meals: [
        // {
        //     time: "2017-09-21 09:30:26",
        //     name: "Breakfast",
        //     img: "",
        //     serving: {
        //         vegetable: 0,
        //         protein: 1,
        //         fat: 2,
        //         carb: 10,
        //         drink: 0,
        //     },
        // },
    ],
    achievements: [
        { name: "meal", consumed: 0, target: 6, warn: false, },
        { name: "vegetable", consumed: 0, target: 6, warn: false, },
        { name: "protein", consumed: 0, target: 3, warn: true, },
        { name: "fat", consumed: 0, target: 2, warn: true, },
        { name: "carb", consumed: 0, target: 2, warn: true, },
        { name: "drink", consumed: 0, target: 4, warn: false, },
    ],
    prevDaysMeals: {},
}

export default function nutritionTrackerApp(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_MEAL:
            let newAchievements = state.achievements.map((a, i) => {
                if (a.name === "meal") {
                    return { ...a, consumed: state.achievements[i].consumed + 1 }
                } else {
                    return { ...a, consumed: state.achievements[i].consumed + action.meal.serving[a.name] }
                }
            })
            return {
                ...state,
                meals: [...state.meals, { ...action.meal }],
                achievements: newAchievements
            }
        case actions.CHANGE_DATE:
            return {
                date: action.date,
                meals: [],
                achievements: initialState.achievements.map(a => ({ ...a })),
                prevDaysMeals: {
                    ...state.prevDaysMeals,
                    date: { ...state.meals },
                }
            }
        default:
            return state
    }
}
