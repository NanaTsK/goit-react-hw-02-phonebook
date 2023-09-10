import { Component } from 'react';
import { Container } from './index.styled';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  // };

  // state = {
  //   contacts: [],
  //   name: '',
  //   number: '',
  // };

  // state = {
  //   contacts: [],
  //   filter: '',
  //   name: '',
  //   number: '',
  // };

  state = {
    contacts: [
      { id: 'id-1', name: 'Lesya Ukrainka', number: '459-12-56' },
      { id: 'id-2', name: 'Boris JohnsonUK', number: '443-89-12' },
      { id: 'id-3', name: 'Taras Shevchenko', number: '645-17-79' },
      { id: 'id-4', name: 'Crimea BeachClub', number: '227-91-26' },
    ],
    filter: '',
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filterContacts = this.getFilterContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <p>contact form</p>
        <h2>Contacts</h2>
        <ContactList
          contacts={filterContacts}
          removeContact={this.removeContact}
          getFilterContacts={this.getFilterContacts}
        />
      </Container>
    );
  }
}

// return <Container>
//       <h1>Phonebook</h1>
// <ContactForm ... />

// <h2>Contacts</h2>
// <Filter ... />
// <ContactList ... />
//   </Container>;
