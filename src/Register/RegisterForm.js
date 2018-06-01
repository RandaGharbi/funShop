import React from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = ({
 values,
 errors,
 touched,
 handleChange,
 handleBlur,
 handleSubmit,
 isSubmitting,
}) => (
 <form onSubmit={handleSubmit}>
   <Input
     type="email"
     name="email"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.email}
     error={!!errors.email}
   />
   {touched.email && errors.email && <div>{errors.email}</div>}
   <br />
   <Input
     type="password"
     name="password"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.password}
   />
   <Input
     type="password"
     name="test"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.test}
   />
   {touched.test && errors.test && <div>{errors.test}</div>}
   <button type="submit" disabled={isSubmitting}>
     Submit
   </button>
 </form>
);

// Wrap our form with the using withFormik HoC
const FormRegister = withFormik({
 // Transform outer props into form values
 mapPropsToValues: () => ({ email: '', password: '' }),
 // Add a custom validation function (this can be async too!)
 validate: (values) => {
   const errors = {};
   if (!values.email) {
     errors.email = 'Required';
   } else if (
     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
   ) {
     errors.email = 'Invalid email address';
   }
   return errors;
 },
 handleSubmit: (values) => {
   console.log('heleo', values);
 },
})(InnerForm);

InnerForm.propTypes = {
 values: PropTypes.shape({
   email: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
 }).isRequired,
 errors: PropTypes.shape({}).isRequired,
 touched: PropTypes.func.isRequired,
 handleChange: PropTypes.func.isRequired,
 handleBlur: PropTypes.func.isRequired,
 handleSubmit: PropTypes.func.isRequired,
 isSubmitting: PropTypes.func.isRequired,
};
export default FormRegister;
