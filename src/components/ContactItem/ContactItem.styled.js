import styled from 'styled-components';

export const Contact = styled('li')({
  display: 'flex',
  height: '36px',
  alignItems: 'center',
  backgroundColor: 'rgba(104, 133, 176, 0.4)',
  boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  gap: '10px',
  marginTop: '6px',
  paddingLeft: '8px',
  paddingRight: '8px',
});

export const ContactName = styled('p')({});
export const ContactNumber = styled('p')({});

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const ContactRemoveBtn = styled('button')({
  marginLeft: 'auto',
  cursor: 'pointer',
  width: '22px',
  height: '22px',
  borderRadius: '100%',
  backgroundColor: 'transparent',
  border: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: `fill ${transition}, box-shadow ${transition}, transform ${transition}`,

  '& > svg': {
    fontSize: '16px',
    width: '16px',
    height: '16px',
    fill: 'rgba(145, 14, 14, 0.4)',
  },

  '&:hover': {
    scale: '1.2',
    boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.4)',
  },

  '&:hover svg': {
    fill: 'rgba(145, 14, 14, 0.8)',
    transition: `fill ${transition}, box-shadow ${transition}, transform ${transition}`,
  },
});
