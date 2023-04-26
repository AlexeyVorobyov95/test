import { nanoid } from 'nanoid';
import { getUsers } from '../../server/Api';
import { useState, useEffect, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BackLink,
  BtnLoadMore,
  Container,
  ContainerBackLink,
  TweetsConteiner,
} from './Tweets.styled';

const Users = lazy(() => import('../../components/Users/Users'));

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (page > 4) {
      alert(`You reached end of results`);
      return;
    }
    getUsers(page).then(user => {
      if (page === 1) {
        setUsers(() => {
          return [...user];
        });
      } else {
        setUsers(prevUser => {
          return [...prevUser, ...user];
        });
      }
    });
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => {
      return prevPage + 1;
    });
  };

  return (
    <>
      <Container>
        <ContainerBackLink>
          <BackLink to={location.state?.frome}>GO BACK</BackLink>
        </ContainerBackLink>

        <TweetsConteiner>
          {users.map(user => (
            <Users key={nanoid()} userCard={user} />
          ))}
        </TweetsConteiner>
        {users.length < 12 && (
          <BtnLoadMore onClick={loadMore}>Load more</BtnLoadMore>
        )}
      </Container>
    </>
  );
};

export default Tweets;
