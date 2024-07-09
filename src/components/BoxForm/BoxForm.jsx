
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; // Для валидации
import css from '../BoxForm/BoxForm.module.css';

const validationSchema = Yup.object().shape({
  userEmail: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const BoxForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Email:', values.userEmail);
    console.log('Password:', values.password);
    resetForm();
  };

  return (
    <div className={css.div}>
      <h1 className={css.maintitle}>AquaTrack</h1>
      <Formik
        initialValues={{ userEmail: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.boxForm}>
            <h2 className={css.title}>Sign In</h2>
            <div className={css.label}>
              <label htmlFor="userEmail" className={css.labelText}>Email</label>
              <Field
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="Enter your email"
                className={css.input}
              />
              {errors.userEmail && touched.userEmail && (
                <div className="error">{errors.userEmail}</div>
              )}
            </div>
            <div className={css.label}>
              <label htmlFor="password" className={css.labelText}>Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className={css.input}
              />
              {errors.password && touched.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <button type="submit" className={css.button}>
              Sign In
            </button>
          </Form>
        )}
      </Formik>
      <p>
        Don’t have an account? <a href="">Sign Up</a>
      </p>
    </div>
  );
};

export default BoxForm;
