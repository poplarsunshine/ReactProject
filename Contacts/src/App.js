import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    screen : 'list', //list,create
    contacts : []
  }

  removeContact = (contact) => {
    ContactAPI.remove(contact).then(
        (data) => {
            this.getAll()
        }
    )
  }

  addContact = (contact) => {
    ContactAPI.create(contact).then(
      (data) => {
          this.getAll()
      }
    )
  }

  getAll = () => {
    ContactAPI.getAll().then(
      (contacts) => {
          this.setState({contacts})
      }
    )
  }

  componentDidMount() {
      this.getAll();
  }

  render() {
    return (
      <div>
          <Route exact path='/' render={()=>(
            <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            />
          )}/>
          <Route path='/create' render={({ history })=>(
            <CreateContact
              onCreateContact={(contact) => {
                this.addContact(contact)
                history.push('/')
              }}
            />
          )}/>
      </div>
    )
  }
}

export default App;
