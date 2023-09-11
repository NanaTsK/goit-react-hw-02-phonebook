import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const PhonebookForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '15px',
});
export const ContactLabel = styled('label')({
  color: 'rgba(255, 255, 255, 0.6)',
  marginTop: '10px',

  transition: `color ${transition}`,
});

export const ContactInput = styled('input')({
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
  color: 'inherit',
  font: 'inherit',
  outline: 0,

  transition: `color ${transition}, box-shadow ${transition}`,
  '&:focus': {
    borderColor: 'rgb(243, 243, 116)',
  },
  '&:focus + label': {
    color: 'rgb(243, 243, 116)',
  },
});

export const ContactAddBtn = styled('button')({
  marginTop: '20px',
  cursor: 'pointer',
  border: 'none',
  color: 'rgba(243, 243, 116, 0.6)',
  font: 'inherit',
  backgroundColor: 'rgba(104, 133, 176, 0.4)',
  boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  height: '36px',

  transition: `color ${transition}, box-shadow ${transition}`,

  '&:hover': {
    color: 'rgb(243, 243, 116)',
    boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.4)',
  },
});
