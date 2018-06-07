import React from 'react'
import { Card, Input, Button } from 'semantic-ui-react'
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import HelloCard from '../Card/HelloCard';
import { Link } from 'react-router-dom';
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
  <Card 
    style = {{position:'relative', left: '45rem', top: '19rem', width: '31rem', height: '32rem'}}
  >
  <Card.Content header='About Amy' />
  <Input
     type="email"
     name="email"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.email}
     error={!!errors.email}
     style = {{position:'relative', bottom:'7rem'}} 
   />
  {touched.email && errors.email && <div>{errors.email}</div>}
  <Input
     type="password"
     name="password"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.password}
     style = {{position:'relative', bottom:'5rem'}}
   />
  {touched.test && errors.test && <div>{errors.test}</div>}
  <div>
    <Button 
     style={{position: 'relative', left: '2rem', bottom: '3rem'}}>
      SignIn
    </Button>
  </div>
  <HelloCard />
  <Card.Content extra>
    <Link 
    to="/FormRegister"
      style={{position: 'relative', left: '23rem'}}>
      SignUp
    </Link>
  </Card.Content>
</Card>
</form>
)
const Welcome = withFormik({
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
  
  Welcome.propTypes = {
   values: PropTypes.shape({
     email: PropTypes.string,
     password: PropTypes.string
   }),
   errors: PropTypes.shape({}),
   touched: PropTypes.func,
   handleChange: PropTypes.func,
   handleBlur: PropTypes.func,
   handleSubmit: PropTypes.func,
   isSubmitting: PropTypes.func,
  }
export default Welcome;
