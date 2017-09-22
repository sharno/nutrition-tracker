/*
 * action types
 */

export const ADD_MEAL = 'ADD_MEAL'
export const CHANGE_DATE = 'CHANGE_DATE'

/*
 * other constants
 */



/*
 * action creators
 */

export function addMeal(meal) {
    return { type: ADD_MEAL, meal }
}

export function changeDate(newDate) {
    return { type: CHANGE_DATE, newDate }
}
