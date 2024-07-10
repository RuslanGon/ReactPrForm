
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import css from '../BoxForm/BoxForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import eye from '../../image/eye-off.png'

const validationSchema = Yup.object().shape({
  userEmail: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const BoxForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log('Email:', data.userEmail);
    console.log('Password:', data.password);
    // Ваши дополнительные действия после отправки формы

    // Сбросить значения формы после отправки
    reset();
  };

  return (
    <div className={css.div}>
      <h1 className={css.maintitle}>AquaTrack</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={css.boxForm}>
        <h2 className={css.title}>Sign In</h2>
        <div className={css.label}>
          <label htmlFor="userEmail" className={css.labelText}>
            Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder="Enter your email"
            className={css.input}
            {...register("userEmail")}
          />
          {errors.userEmail && (
            <div className="error">{errors.userEmail.message}</div>
          )}
        </div>
        <div className={css.label}>
          <label htmlFor="password" className={css.labelText}>
            Password
          </label>
          <div className={css.inputWrapper}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className={css.input}
              {...register("password")}
            />
            <img className={css.eyeImg} src={eye} alt="" />
            {errors.password && (
              <div className="error">{errors.password.message}</div>
            )}
          </div>
        </div>
        <button type="submit" className={css.button}>
          Sign In
        </button>
      </form>
      <p className={css.text}>
        Don’t have an account? <a href="">Sign Up</a>
      </p>
    </div>
  );
};

export default BoxForm;
