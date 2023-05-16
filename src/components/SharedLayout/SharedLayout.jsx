import { Section } from 'components/Section/Section';
import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Section tag={'header'}>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Section>
      <Section tag={'main'}>
        <Outlet />
      </Section>
      <Section tag={'footer'}>
        <div>Footer</div>
      </Section>
    </>
  );
};
