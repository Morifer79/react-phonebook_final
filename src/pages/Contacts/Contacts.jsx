import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { selectError, selectLoading } from 'redux/contacts/contactSelectors';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import { Container, ThumbContact } from './Contacts.styled';
import clean_scroll from '../../images/clean_scroll.png';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <img src={clean_scroll} alt="scroll" />
        <ThumbContact>
          <ContactForm />
          <Filter />
          {isLoading && !isError && <Loader />}
          <ContactList />
        </ThumbContact>
      </Container>
    </>
  );
}
