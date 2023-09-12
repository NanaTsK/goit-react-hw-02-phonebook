import { Component } from 'react';
import { Container } from './index.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Lesya Ukrainka', number: '459-12-56' },
      { id: 'id-2', name: 'Boris JohnsonUK', number: '443-89-12' },
      { id: 'id-3', name: 'Taras Shevchenko', number: '645-17-79' },
      { id: 'id-4', name: 'Crimea BeachClub', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact => {
    const isTrue = this.state.contacts.some(
      ({ name }) => name === newContact.name
    );
    if (isTrue) {
      alert(`${newContact.name} is already in Phonebook!`);
      return;
    }
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
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

  handleFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    const filterContacts = this.getFilterContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList
          contacts={filterContacts}
          removeContact={this.removeContact}
          getFilterContacts={this.getFilterContacts}
        />
      </Container>
    );
  }
}
