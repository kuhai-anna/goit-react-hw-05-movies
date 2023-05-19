import styled from 'styled-components';
import { Field as FormikField, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  background-color: ${props => props.theme.colors.bgdForm};
  border-radius: ${props => props.theme.spacing(1)};
  overflow: hidden;
`;

export const Field = styled(FormikField)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: ${props => props.theme.colors.bgdForm};
  padding: ${props => props.theme.spacing(0)} ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.textAccent};

  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
