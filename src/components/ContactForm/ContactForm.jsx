import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactSelectors';
import { addContact } from 'redux/contacts/contactOperations';
import { TextReg } from 'components/RegisterForm/RegisterForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonAdd,
  ErrMsg,
  FormStyled,
  InputStyled,
  Label,
} from 'components/ContactForm/ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(16, 'Too Long!')
    .required('The field cannot be left empty!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string()
    .min(9, 'enter the number in the format XXX-XX-XX')
    .max(9, 'enter the number in the format XXX-XX-XX')
    .required('The field cannot be left empty!')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and dashes.'
    ),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (person, { resetForm }) => {
    const existName = contacts.some(
      ({ name }) => name.toLowerCase() === person.name.toLowerCase()
    );

    const existNumber = contacts.some(({ number }) => number === person.number);

    if (existName) {
      alert('A contact with this name already in contacts');
      return;
    }

    if (existNumber) {
      alert('A contact with this number already in contacts');
      return;
    }

    dispatch(addContact(person));

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      <FormStyled autoComplete="off">
        <Label>
          Name
          <InputStyled type="text" name="name" required />
          <ErrMsg name="name" component="div" />
        </Label>
        <Label>
          Number
          <InputStyled type="tel" name="number" required />
          <ErrMsg name="number" component="div" />
        </Label>
        <ButtonAdd type="submit">
          <TextReg>Add contact</TextReg>
        </ButtonAdd>
      </FormStyled>
    </Formik>
  );
};
