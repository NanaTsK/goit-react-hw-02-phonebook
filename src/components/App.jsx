import { Component } from 'react';
import { Container } from './index.styled';

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

  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   name: '',
  //   number: '',
  // };

  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>

        <h2>Contacts</h2>
        <p>some text</p>
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
