import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Formik } from 'formik';
import { IconButton } from 'components/IconButton/IconButton';
import { Form, Field } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const initialValues = {
    query: '',
  };

  // пошук зображення
  const searchMovie = (values, { resetForm }) => {
    if (values.query.trim() === '') {
      alert('Enter a search query!');
      resetForm(); //якщо користувач ввів пробіли

      return;
    }

    // передача нового запиту, оновлення сторінки до 1-ї
    onSubmit({
      ...values,
      page: 1,
    });

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={searchMovie}>
      <Form className="form">
        <Field
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />

        <IconContext.Provider
          value={{
            size: '20px',
          }}
        >
          <IconButton type="submit" aria-label="Search button">
            <BsSearch />
          </IconButton>
        </IconContext.Provider>
      </Form>
    </Formik>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
