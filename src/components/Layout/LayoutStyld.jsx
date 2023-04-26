import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  font-size: 40px;
  padding: 20px;
  display: flex;
  gap: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const ActivNavLink = styled(NavLink)`
  font-weight: 700;
  color: white;

  &.active {
    text-decoration: revert;
    color: #5cd3a8;
  }
`;

export const LinkLogo = styled(Link)`
  display: flex;
  color: white;
  justify-content: center;
  gap: 20px;
  margin-right: 50px;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;

  text-align: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  justify-content: center;
  align-items: center;
`;

export const FooterLink = styled.a`
  font-size: 24px;
  color: white;
  font-weight: 700;
`;
