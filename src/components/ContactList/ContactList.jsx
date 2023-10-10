import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactOperations';
import { TextReg } from 'components/RegisterForm/RegisterForm.styled';
import {
  ContactsList,
  ContactsListItem,
  ButtonDel,
} from './ContactList.styled';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contacts/contactSelectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filterContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  const getVisibilityContacts = () => {
    if (!filterContacts || filterContacts === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  //useEffect(() => {
  //  dispatch(fetchContacts());
  //}, [dispatch]);

  return (
    <ContactsList>
      {visibilityContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          {name}: {number}
          <ButtonDel type="button" id={id} onClick={handleDelete}>
            <TextReg>Delete</TextReg>
          </ButtonDel>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};
