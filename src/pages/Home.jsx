import { Section } from 'components/Section/Section';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';

const Home = () => {
  const movies = ['batman', 'duna', 'spiderman'];

  return (
    <Section mainTitle={'Tranding today'}>
      <MovieGallery movies={movies} />
    </Section>
  );
};

export default Home;
