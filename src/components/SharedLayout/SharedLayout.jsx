import { Section } from 'components/Section/Section';
import { Outlet } from 'react-router-dom';
import { Link } from './SharedLayout.styled';
import { Nav } from './SharedLayout.styled';
import { HeaderWrap } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Section tag={'header'}>
        <HeaderWrap>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Nav>
          <button>Button</button>
        </HeaderWrap>
      </Section>
      <Section tag={'main'}>
        <Outlet />
      </Section>
      <Section tag={'footer'}>
        <div>Created with love by student of GoIT</div>
      </Section>
    </>
  );
};
