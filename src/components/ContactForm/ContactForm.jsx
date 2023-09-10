import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  PhonebookForm,
  ContactLable,
  ContactInput,
  ContactAddBtn,
} from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  //   state = {
  //     ...INITIAL_STATE,
  //   };
  state = INITIAL_STATE;

  render() {
    return (
      <PhonebookForm>
        <ContactLable>Name</ContactLable>
        <ContactInput></ContactInput>
        <ContactLable>Number</ContactLable>
        <ContactInput></ContactInput>
        <ContactAddBtn>Add contact</ContactAddBtn>
      </PhonebookForm>
    );
  }
}

/* <ContactAddBtn onClick={() => removeContact(id)}></ContactAddBtn>; */
