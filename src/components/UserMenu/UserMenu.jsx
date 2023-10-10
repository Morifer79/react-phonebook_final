import { useDispatch } from 'react-redux';
import { BattonLogOut, GreetUser, UserLogo, Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import ava from '../../images/ava.jpg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserLogo src={ava} alt="user" />
      <GreetUser>Welcome, {user.name}</GreetUser>
      <BattonLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BattonLogOut>
    </Wrapper>
  );
};
