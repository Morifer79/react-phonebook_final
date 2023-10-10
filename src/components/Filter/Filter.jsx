import { useDispatch } from 'react-redux';
import { SearchInput, SearchLabelText } from './Filter.styled';
import { applyFilter } from 'redux/contacts/filterSlice';
import { nanoid } from 'nanoid';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <SearchLabelText>Find contacts by name:</SearchLabelText>
      <SearchInput
        type="text"
        id={nanoid()}
        onChange={e => dispatch(applyFilter(e.target.value))}
      />
    </>
  );
};
