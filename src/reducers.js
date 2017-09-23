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
    prevDaysMeals: [
        // {date: "2017-09-22T00:00:00-04:00", meals: [{"name":"Breakfast","time":"2017-09-22T22:47:50-04:00","img":"","serving":{"vegetable":1,"protein":0,"fat":0,"carb":0,"drink":0}}]},
        // {date: "2017-09-23T00:00:00-04:00", meals: [{"name":"Breakfast","time":"2017-09-23T22:47:50-04:00","img":"","serving":{"vegetable":1,"protein":0,"fat":0,"carb":0,"drink":0}}]},
        // {date: "2017-09-24T00:00:00-04:00", meals: [{"name":"Breakfast","time":"2017-09-24T22:47:50-04:00","img":"","serving":{"vegetable":1,"protein":0,"fat":0,"carb":0,"drink":0}}]},
        // {date: "2017-09-25T00:00:00-04:00", meals: [{"name":"Breakfast","time":"2017-09-25T22:47:50-04:00","img":"","serving":{"vegetable":1,"protein":0,"fat":0,"carb":0,"drink":0}}, {"name":"Breakfast","time":"2017-09-25T23:47:50-04:00","img":"","serving":{"vegetable":1,"protein":0,"fat":0,"carb":0,"drink":0}}]},
    ],
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
            let newPrevDaysMeals = [...state.prevDaysMeals]
            if (state.meals.length) newPrevDaysMeals.push({ date: state.date, meals: [...state.meals] })
            return {
                date: action.date,
                meals: [],
                achievements: initialState.achievements.map(a => ({ ...a })),
                prevDaysMeals: newPrevDaysMeals,
            }
        default:
            return state
    }
}
