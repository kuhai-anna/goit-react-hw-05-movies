import { Section } from 'components/Section/Section';
import { Outlet } from 'react-router-dom';
import { Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Section tag={'header'}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
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
