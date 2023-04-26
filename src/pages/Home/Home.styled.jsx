import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  min-height: 80vh;
  background: linear-gradient(#e66465, #9198e5);
`;

export const GoToTweets = styled(Link)`
  display: block;
  width: 250px;
  height: auto;
  padding: 50px 90px 50px 90px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'MontserratSemiBold';
  font-size: 34px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus-visible {
    background-color: #5cd3a8;
  }
`;

export const LinkContainer = styled.div`
  text-align: center;
  padding: 15vh 39vw;
`;

export const Title = styled.h1`
  font-family: 'MontserratSemiBold';
  text-align: center;
  color: black;
  padding: 15vh 30vw 0 30vw;
  font-size: 48px;
`;
