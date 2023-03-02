import PropTypes from 'prop-types';
import { Item, Status, Name } from '../FriendList/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
//   console.log(isOnline);
  return (
    <Item>
      <Status isOnlineType={isOnline}>{isOnline}</Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
}).isRequired;
