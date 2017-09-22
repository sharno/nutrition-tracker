/*
 * action types
 */

export const ADD_MEAL = 'ADD_MEAL'
export const CHANGE_DATE = 'CHANGE_DATE'

/*
 * other constants
 */

export const DailyGoals = {
    MEALS_NUM: 6,
    VEG_SERVINGS: 3,
    PROTEIN_SERVINGS: 3,
    FAT_SERVINGS: 2,
    CARB_SERVINGS: 2,
    DRINK_SERVINGS: 8,
}

export const ServingTypes = ["vegetable", "protein", "fat", "carb", "drink"]

/*
 * action creators
 */

export function addMeal(meal) {
    return { type: ADD_MEAL, meal }
}

export function changeDate(newDate) {
    return { type: CHANGE_DATE, newDate }
}
