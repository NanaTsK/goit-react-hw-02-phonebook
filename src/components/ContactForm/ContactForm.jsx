import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  PhonebookForm,
  ContactLabel,
  ContactInput,
  ContactAddBtn,
} from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = INITIAL_STATE;

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.handleAddContact(newContact, this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <PhonebookForm onSubmit={this.handleSubmitForm}>
        <ContactLabel>Name</ContactLabel>
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          value={this.state.name}
          onChange={this.handleInput}
          required
        />
        <ContactLabel>Number</ContactLabel>
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          value={this.state.number}
          onChange={this.handleInput}
          required
        />
        <ContactAddBtn type="submit">Add contact</ContactAddBtn>
      </PhonebookForm>
    );
  }
}
