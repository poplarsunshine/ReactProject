import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

// 类方式
class ListContacts extends Component {

  static propTypes = {
    contacts : PropTypes.array.isRequired,
    onDeleteContact : PropTypes.func.isRequired,
    onAddContact : PropTypes.func.isRequired
  }

  state = {
    query : ""
  }

  inputChanged = (text) => {
    this.setState(
      {
        //query : text.trim()
        query : text
      }
    )
  }

  showAll = () => {
    this.setState(
      {
        query : ""
      }
    )
  }

  render() {
    console.log("props", this.props.contacts);

    const {contacts, onDeleteContact, onAddContact} = this.props
    const {query} = this.state

    let showContacts
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showContacts = contacts
    }
    showContacts.sort(sortBy('name'))

    return (
      <div className="list-contacts">
        <div  className="list-contacts-top">
          <input
            className="search-contacts"
            type='text'
            placeholder='搜索联系人'
            value={query}
            onChange={(event) => {this.inputChanged(event.target.value)}}
           />
          <Link
            to='/create'
            onClick={() => onAddContact()}
            className='add-contact'
          >Add Contact</Link>
        </div>

        {showContacts.length !== contacts.length && (
          <div className='showing-contacts'>
           <span>搜索到{showContacts.length}条 总共{contacts.length}条</span>
           <button onClick={this.showAll}>查看全部</button>
          </div>
        )}

        <ol className='contact-list'>
          {showContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}/>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={() => onDeleteContact(contact)} className='contact-remove'>delete</button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

// 函数方式
// function ListContacts (props) {
//   console.log("props", props.contacts);
//   return (
//     <ol className='contact-list'>
//       {props.contacts.map((contact) => (
//         <li key={contact.id} className='contact-list-item'>
//           <div className='contact-avatar' style={{
//             backgroundImage: `url(${contact.avatarURL})`
//           }}/>
//           <div className='contact-details'>
//             <p>{contact.name}</p>
//             <p>{contact.email}</p>
//           </div>
//           <button className='contact-remove'>delete</button>
//         </li>
//       ))}
//     </ol>
//   )
// }

// 函数方式 - 箭头
// const ListContacts = ((props) =>
//   (
//     <ol className='contact-list'>
//       {props.contacts.map((contact) => (
//         <li key={contact.id} className='contact-list-item'>
//           <div className='contact-avatar' style={{
//             backgroundImage: `url(${contact.avatarURL})`
//           }}/>
//           <div className='contact-details'>
//             <p>{contact.name}</p>
//             <p>{contact.email}</p>
//           </div>
//           <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>delete</button>
//         </li>
//       ))}
//     </ol>
//   )
// )

export default ListContacts
