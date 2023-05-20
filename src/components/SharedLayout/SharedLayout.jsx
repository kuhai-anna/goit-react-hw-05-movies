import { Outlet } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import { AppWraper, Link } from './SharedLayout.styled';
import { Nav } from './SharedLayout.styled';
import { HeaderWrap } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <AppWraper>
      <Section tag={'header'}>
        <HeaderWrap>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Nav>
        </HeaderWrap>
      </Section>
      <Section tag={'main'}>
        <Outlet />
      </Section>
      <Section tag={'footer'}>
        <p>&copy; 2023 | All Rights Reserved</p>
      </Section>
    </AppWraper>
  );
};
