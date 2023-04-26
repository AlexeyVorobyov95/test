import { useLocation } from 'react-router-dom';
import { GoToTweets, HomeContainer, LinkContainer, Title } from './Home.styled';

const Home = () => {
  const location = useLocation();
  return (
    <HomeContainer>
      <Title>Hi, friend. Let's see your tweets</Title>
      <LinkContainer>
        <GoToTweets to="/tweets" state={{ frome: location }}>
          GO TO TWEETS
        </GoToTweets>
      </LinkContainer>
    </HomeContainer>
  );
};

export default Home;
