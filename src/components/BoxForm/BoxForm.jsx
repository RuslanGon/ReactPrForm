
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'; // Необходимо для валидации, хотя react-hook-form не требует использования Yup
import css from '../BoxForm/BoxForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';


const validationSchema = Yup.object().shape({
  userEmail: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const BoxForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema) // Используем Yup для валидации с помощью resolver
  });

  const onSubmit = (data) => {
    console.log('Email:', data.userEmail);
    console.log('Password:', data.password);
    // Ваши дополнительные действия после отправки формы
  };

  return (
    <div className={css.div}>
      <h1 className={css.maintitle}>AquaTrack</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={css.boxForm}>
        <h2 className={css.title}>Sign In</h2>
        <div className={css.label}>
          <label htmlFor="userEmail" className={css.labelText}>Email</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder="Enter your email"
            className={css.input}
            {...register('userEmail')}
          />
          {errors.userEmail && <div className="error">{errors.userEmail.message}</div>}
        </div>
        <div className={css.label}>
          <label htmlFor="password" className={css.labelText}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className={css.input}
            {...register('password')}
          />
          {errors.password && <div className="error">{errors.password.message}</div>}
        </div>
        <button type="submit" className={css.button}>
          Sign In
        </button>
      </form>
      <p>
        Don’t have an account? <a href="">Sign Up</a>
      </p>
    </div>
  );
};

export default BoxForm;
