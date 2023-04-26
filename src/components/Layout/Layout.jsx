import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  ActivNavLink,
  FooterContainer,
  FooterLink,
  ImgLogo,
  LinkLogo,
  Name,
  Nav,
} from './LayoutStyld';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();


  return (
    <>
      <header>
        <Nav>
          <LinkLogo to="/">
            <ImgLogo src="../../images/logo.png" alt="Logo" />
            <Name>Tweets Life</Name>
          </LinkLogo>
          <ActivNavLink to="/">Home</ActivNavLink>
          <ActivNavLink to="/tweets" state={{ frome: location }}>
            Tweets
          </ActivNavLink>
        </Nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <FooterContainer>
          <FooterLink
            href="https://github.com/AlexeyVorobyov95/test"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            &#169; Alexey Vorobyov - All rights reserved, 2023
          </FooterLink>
        </FooterContainer>
      </footer>
    </>
  );
};

export default Layout;
