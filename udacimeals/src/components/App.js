import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'
import { capitalize } from '../utils/helper'
import CalenderIcon from 'react-icons/lib/fa/calendar-plus-o'

class App extends Component {

  doThing = () => {
    this.props.selectRecipe({})
  }

  render() {
    const { calendar, remove } = this.props
    const mealOrder = ['breakfast', 'lunch', 'dinner']

    return (
      <div className="container">
        <ul className='meal-types'>
          {mealOrder.map((mealType) => (
            <li key={mealType} className='subheader'>
              {capitalize(mealType)}
            </li>
          ))}
        </ul>

        <div className='calendar'>
          <div className='days'>
            {calendar.map(({ day }) => (
                <h3 key={day} className='subheader'>
                  {capitalize(day)}
                </h3>
            ))}
          </div>

          <div className='icon-grid'>
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map((mealType) => (
                  <li key={mealType} className='meal'>
                    {
                      meals[mealType]
                      ? <div className='food-item'>
                          <img src={meals[mealType].image} alt={meals[mealType].label}/>
                          <button>
                            Clear
                          </button>
                        </div>
                      : <div className='icon-btn'>
                          <CalenderIcon size={30}/>
                        </div>
                    }
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps ({calendar, food}) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals : Object.keys(calendar[day]).reduce((meals, mealKey) => {
        meals[mealKey] = calendar[day][mealKey]
          ? calendar[day][mealKey]
          : null
        return meals
      },{})
    }))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => {dispatch(addRecipe(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
