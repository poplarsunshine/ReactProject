import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { addRecipe } from '../actions'

class App extends Component {
  state = {
    calendar: null
  }

  componentDidMount () {
    const {store} = this.props

    store.subscribe(() => {
      this.setState({
        calendar: store.getState()
      })
    })
  }

  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label : this.input.value
      }
    }))

    this.input.value = ''
  }

  render() {
    return (
      <div className="App">
        <input type = 'text'
                ref = {
                  (input) => this.input = input
                }
                placeholder = 'Monday breakfast'
        ></input>
        <button onClick={this.submitFood}>提交</button>
        <pre>
        Monday breakfast: {this.state.calendar && this.state.calendar.rili.monday.breakfast}
        </pre>
      </div>
    );
  }
}

export default App;
