import { useEffect, useState } from 'react';
import { changeFollowers } from '../../server/Api';
import { getUser } from '../../server/Api';
import PropTypes from 'prop-types';
import {
  ImgBorder,
  ImgThumb,
  CardText,
  UsersContainer,
  Button,
} from './User.stayled';

const Users = ({ userCard }) => {
  const [userInfo, setUserInfo] = useState(userCard);
  const { user, tweets, followers, avatar, id } = userInfo;
  const [togl, setTogl] = useState(
    window.localStorage.getItem(`toglId:${id}`)
      ? JSON.parse(window.localStorage.getItem(`toglId:${id}`))
      : { id, status: false }
  );

  const { status } = togl;

  useEffect(() => {
    window.localStorage.setItem(`toglId:${id}`, JSON.stringify(togl));
  }, [togl]);

  const changeBtn = async () => {
    setTogl(prevTogl => {
      return (prevTogl = {
        id,
        status: !status,
      });
    });
    const changeFollowersValue = followers => {
      if (!status) {
        let newValueFollowers = (followers += 1);
        return newValueFollowers;
      } else if (status) {
        let newValueFollowers = (followers -= 1);
        return newValueFollowers;
      }
    };
    let update = {
      user,
      tweets,
      followers: changeFollowersValue(followers),
      avatar,
      id,
    };
    await changeFollowers(id, update);
    await getUser(id).then(userChangeInfo => {
      setUserInfo(() => {
        return userChangeInfo;
      });
    });
  };

  return (
    <>
      <UsersContainer>
        <ImgBorder>
          <ImgThumb>
            <img src={avatar} alt={user} />
          </ImgThumb>
        </ImgBorder>
        <CardText>{tweets.toLocaleString('en-US')} Tweets</CardText>
        <CardText>{followers.toLocaleString('en-US')} Followers</CardText>
        {!status ? (
          <Button type="button" status={status} onClick={changeBtn}>
            Follow
          </Button>
        ) : (
          <Button type="button" status={status} onClick={changeBtn}>
            Followes
          </Button>
        )}
      </UsersContainer>
    </>
  );
};

export default Users;
Users.propTypes = {
  userCard: PropTypes.shape({
    user: PropTypes.string,
    tweets: PropTypes.number,
    followers: PropTypes.number,
    avatar: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
