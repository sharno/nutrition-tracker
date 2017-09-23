import reducer from './reducers'
import { ADD_MEAL, CHANGE_DATE } from './actions'

describe('reducer', () => {
    it('should return the initial state when initialized with no state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                date: "",
                meals: [],
                achievements: [
                    { name: "meal", consumed: 0, target: 6, warn: false, },
                    { name: "vegetable", consumed: 0, target: 6, warn: false, },
                    { name: "protein", consumed: 0, target: 3, warn: true, },
                    { name: "fat", consumed: 0, target: 2, warn: true, },
                    { name: "carb", consumed: 0, target: 2, warn: true, },
                    { name: "drink", consumed: 0, target: 4, warn: false, },
                ],
                prevDaysMeals: [],
            }
        )
    })

    it('should handle ADD_MEAL', () => {
        const state = {
            date: "2017-09-22T00:00:00-04:00",
            meals: [
                {
                    "name": "Breakfast",
                    "time": "2017-09-22T09:47:50-04:00",
                    "img": "",
                    "serving": { "vegetable": 2, "protein": 0, "fat": 1, "carb": 1, "drink": 1 }
                },
            ],
            achievements: [
                { name: "meal", consumed: 1, target: 6, warn: false, },
                { name: "vegetable", consumed: 2, target: 6, warn: false, },
                { name: "protein", consumed: 0, target: 3, warn: true, },
                { name: "fat", consumed: 1, target: 2, warn: true, },
                { name: "carb", consumed: 1, target: 2, warn: true, },
                { name: "drink", consumed: 1, target: 4, warn: false, },
            ],
            prevDaysMeals: [],
        }
        const meal = {
            "name": "Lunch",
            "time": "2017-09-22T13:23:40-04:00",
            "img": "",
            "serving": { "vegetable": 1, "protein": 3, "fat": 2, "carb": 0, "drink": 1 }
        }
        const action = {
            type: ADD_MEAL,
            meal
        }

        const expectedState = {
            date: "2017-09-22T00:00:00-04:00",
            meals: [
                {
                    "name": "Breakfast",
                    "time": "2017-09-22T09:47:50-04:00",
                    "img": "",
                    "serving": { "vegetable": 2, "protein": 0, "fat": 1, "carb": 1, "drink": 1 }
                },
                {
                    "name": "Lunch",
                    "time": "2017-09-22T13:23:40-04:00",
                    "img": "",
                    "serving": { "vegetable": 1, "protein": 3, "fat": 2, "carb": 0, "drink": 1 }
                },
            ],
            achievements: [
                { name: "meal", consumed: 2, target: 6, warn: false, },
                { name: "vegetable", consumed: 3, target: 6, warn: false, },
                { name: "protein", consumed: 3, target: 3, warn: true, },
                { name: "fat", consumed: 3, target: 2, warn: true, },
                { name: "carb", consumed: 1, target: 2, warn: true, },
                { name: "drink", consumed: 2, target: 4, warn: false, },
            ],
            prevDaysMeals: [],
        }
        expect(reducer(state, action)).toEqual(expectedState)
    })

    it('should handle CHANGE_DATE', () => {
        const state = {
            date: "2017-09-22T00:00:00-04:00",
            meals: [
                {
                    "name": "Breakfast",
                    "time": "2017-09-22T09:47:50-04:00",
                    "img": "",
                    "serving": { "vegetable": 2, "protein": 0, "fat": 1, "carb": 1, "drink": 1 }
                },
                {
                    "name": "Lunch",
                    "time": "2017-09-22T13:23:40-04:00",
                    "img": "",
                    "serving": { "vegetable": 1, "protein": 3, "fat": 2, "carb": 0, "drink": 1 }
                },
            ],
            achievements: [
                { name: "meal", consumed: 2, target: 6, warn: false, },
                { name: "vegetable", consumed: 3, target: 6, warn: false, },
                { name: "protein", consumed: 3, target: 3, warn: true, },
                { name: "fat", consumed: 3, target: 2, warn: true, },
                { name: "carb", consumed: 1, target: 2, warn: true, },
                { name: "drink", consumed: 2, target: 4, warn: false, },
            ],
            prevDaysMeals: [],
        }
        const date = '2017-09-23T00:00:00-04:00'
        const action = {
            type: CHANGE_DATE,
            date
        }
        const expectedState = {
            date: "2017-09-23T00:00:00-04:00",
            meals: [],
            achievements: [
                { name: "meal", consumed: 0, target: 6, warn: false, },
                { name: "vegetable", consumed: 0, target: 6, warn: false, },
                { name: "protein", consumed: 0, target: 3, warn: true, },
                { name: "fat", consumed: 0, target: 2, warn: true, },
                { name: "carb", consumed: 0, target: 2, warn: true, },
                { name: "drink", consumed: 0, target: 4, warn: false, },
            ],
            prevDaysMeals: [
                {
                    date: '2017-09-22T00:00:00-04:00',
                    meals: [
                        {
                            "name": "Breakfast",
                            "time": "2017-09-22T09:47:50-04:00",
                            "img": "",
                            "serving": { "vegetable": 2, "protein": 0, "fat": 1, "carb": 1, "drink": 1 }
                        },
                        {
                            "name": "Lunch",
                            "time": "2017-09-22T13:23:40-04:00",
                            "img": "",
                            "serving": { "vegetable": 1, "protein": 3, "fat": 2, "carb": 0, "drink": 1 }
                        },
                    ]
                }
            ],
        }
        expect(reducer(state, action)).toEqual(expectedState)
    })
})