import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactAPI from './utils/ContactsAPI'

// const contacts = [
//   {
//     "id": "ryan",
//     "name": "Ryan Florence",
//     "email": "ryan@reacttraining.com",
//     "avatarURL": "http://localhost:5001/ryan.jpg"
//   },
//   {
//     "id": "michael",
//     "name": "Michael Jackson",
//     "email": "michael@reacttraining.com",
//     "avatarURL": "http://localhost:5001/michael.jpg"  },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "email": "tyler@reacttraining.com",
//     "avatarURL": "http://localhost:5001/tyler.jpg"
//   }
// ]

class App extends Component {
  state = {
    contacts : [
      // {
      //   "id": "ryan",
      //   "name": "Ryan Florence",
      //   "email": "ryan@reacttraining.com",
      //   "avatarURL": "http://localhost:5001/ryan.jpg"
      // },
      // {
      //   "id": "michael",
      //   "name": "Michael Jackson",
      //   "email": "michael@reacttraining.com",
      //   "avatarURL": "http://localhost:5001/michael.jpg"
      // },
      // {
      //   "id": "tyler",
      //   "name": "Tyler McGinnis",
      //   "email": "tyler@reacttraining.com",
      //   "avatarURL": "http://localhost:5001/tyler.jpg"
      // }
    ]
  }

  removeContact = (contact) => {
    // console.log("log contact:", contact);
    // console.log("log contact.id:", contact.id);
    // this.setState((state) => (
    //   {
    //     contacts: state.contacts.filter((c) => c.id !== contact.id)
    //   }
    // ))

    ContactAPI.remove(contact).then(
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

    componentWillMount(){
      console.log("componentWillMount");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }


  componentDidMount() {
      console.log("componentDidMount");
      this.getAll();
  }

  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
