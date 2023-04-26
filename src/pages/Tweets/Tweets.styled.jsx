import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TweetsConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
  justify-content: center;
  margin: 20px 0 50px;
`;

export const Container = styled.div`
  padding: 20px 0 20px 0;
  min-height: 80vh;
  background: linear-gradient(#e66465, #9198e5);
`;

export const BtnLoadMore = styled.button`
  display: block;
  margin: 0 auto;

  width: 196px;
  height: 50px;
  padding: 14px 28px;
  background-color: ${props => (props.status ? '#5cd3a8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'MontserratSemiBold';
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus-visible {
    background-color: #5cd3a8;
  }
`;

export const ContainerBackLink = styled.div`
  padding-left: 20px;
`;

export const BackLink = styled(Link)`
  display: block;
  width: 82px;
  height: auto;
  padding: 14px 57px 14px 57px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'MontserratSemiBold';
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus-visible {
    background-color: #5cd3a8;
  }
`;
