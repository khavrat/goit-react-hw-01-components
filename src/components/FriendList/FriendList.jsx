import PropTypes from 'prop-types';
// import friends from 'friends.json';
import { FriendListItem } from '../FriendList/FriendListItem';
import { Friendlist } from '../FriendList/FriendList.styled';


export const FriendList = ({friends}) => {
//   console.log(friends);
  return (
    <Friendlist>
      {friends.map(friend => (
        <FriendListItem key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Friendlist>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
