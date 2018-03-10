import {combineReducers} from 'redux'
import {
  ADD_PRCIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'

const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: 'pizza',
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

function rili (state = initialCalendarState, action) {
  console.log('calendar fun:' + state);

  const {day, meal, recipe} = action;

  switch (action.type) {
    case ADD_PRCIPE:
      return {
        ...state,
        [day] : {
          ...state[day],
          [meal] : recipe.label
        }
      };
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day] : {
          ...state[day],
          [meal] : null
        }
      };
    default:
      return state;
  }
}

export default combineReducers(
  {
    rili
  }
)
