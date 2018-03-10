export const ADD_PRCIPE = 'ADD_PRCIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe ({day, meal, recipe}) {
  return {
    type : ADD_PRCIPE,
    day,
    meal,
    recipe
  }
}

export function removeFromCalendar ({day, meal}) {
  return {
    type : REMOVE_FROM_CALENDAR,
    day,
    meal
  }
}
