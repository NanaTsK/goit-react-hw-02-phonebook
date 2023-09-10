import { Component } from 'react';
// import { nanoid } from 'nanoid';
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

  render() {
    return (
      <PhonebookForm>
        <ContactLabel>Name</ContactLabel>
        <ContactInput
        //   type="text"
        //   name="name"
        //   pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //   autoComplete="off"
        //   value={this.state.name}
        // onChange={this.getContactData}
        //   required
        />
        <ContactLabel>Number</ContactLabel>
        <ContactInput
        //   type="tel"
        //   name="number"
        //   pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        //   autoComplete="off"
        //   onChange={this.getContactData}
        //   value={this.state.number}
        //   required
        />
        <ContactAddBtn>Add contact</ContactAddBtn>
      </PhonebookForm>
    );
  }
}

/* <ContactAddBtn onClick={() => removeContact(id)}></ContactAddBtn>; */
