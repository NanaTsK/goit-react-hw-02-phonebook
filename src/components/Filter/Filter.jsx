// export class ContactForm extends Component {
//   state = INITIAL_STATE;

//   handleInput = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmitForm = e => {
//     e.preventDefault();
//     const newContact = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number,
//     };
//     this.props.handleAddContact(newContact, this.state);
//     this.setState(INITIAL_STATE);
//   };

//   render() {
//     return (
//       <PhonebookForm onSubmit={this.handleSubmitForm}>
//         <ContactLabel>Name</ContactLabel>
// <ContactInput
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain up to 16 letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Comte d'Artagnan"
//   maxLength="16"
//   autoComplete="off"
//   value={this.state.name}
//   onChange={this.handleInput}
//   required
// />
//         <ContactLabel>Number</ContactLabel>
//         <ContactInput
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//           title="Phone number may contain 5-16 digits, spaces, dashes, parentheses and can start with +"
//           maxLength="16"
//           autoComplete="off"
//           value={this.state.number}
//           onChange={this.handleInput}
//           required
//         />
//         <ContactAddBtn type="submit">Add contact</ContactAddBtn>
//       </PhonebookForm>
//     );
//   }
// }

import { ContactLabel, ContactInput } from '../ContactForm/ContactForm.styled';
import { FilterForm } from './Filter.styled';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <FilterForm>
      <ContactInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        maxLength="16"
        id="filter"
        value={filter}
        onChange={handleFilter}
      />
      <ContactLabel>Find contacts by name</ContactLabel>
    </FilterForm>
  );
};
