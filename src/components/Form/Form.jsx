import { useForm } from 'react-hook-form';
import css from "../Form/Form.module.css";
import vector from '../../image/vector.png';


const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <form className={css.setForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.setdivmain}>
        <div className={css.setdiv1}>
          <label className={css.label}>
            <input
              className={css.radio}
              type="radio"
              name="gender"
              value="woman"
              {...register("gender", { required: true })}
            />
            <span className={css.man}>woman</span>
          </label>
          <label className={css.label}>
            <input
              className={css.radio}
              type="radio"
              name="gender"
              value="man"
              {...register("gender", { required: true })}
            />
            <span className={css.man}>man</span>
          </label>
          {errors.gender && <p className={css.error}>Gender is required.</p>}
          
          <h3>Your name</h3>
          <input
            className={css.inputtext}
            type="text"
            placeholder="Nadia"
            {...register("name", { required: true })}
            maxLength={25}
          />
          {errors.name && <p className={css.error}>Name is required.</p>}
          
          <h3>Email</h3>
          <input
            className={css.inputtext}
            type="email"
            placeholder="nadia10@gmail.com"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            maxLength={25}
          />
          {errors.email && <p className={css.error}>Valid email is required.</p>}
          
          <h3>My daily norma</h3>
          <div className={css.divgender}>
            <div className={css.divwoman}>
              <p className={css.forman}>For woman:</p>
              <span className={css.formula}>V=(M*0.03) + (T*0.4)</span>
            </div>
            <div className={css.divman}>
              <p className={css.forman}>For man:</p>
              <span className={css.formula}>V=(M*0.04) + (T*0.6)</span>
            </div>
          </div>
          <div className={css.divtexta}>
            <p className={css.divtextatext}>
              * V is the volume of the water norm in liters per <br /> day, M is
              your body weight, T is the time of <br /> active sports, or
              another type of activity <br /> commensurate in terms of loads (in
              the <br /> absence of these, you must set 0)
            </p>
          </div>
          <div className={css.danger}>
            <img className={css.vector} src={vector} alt="" />
            <p>Active time in hours</p>
          </div>
        </div>
        <div className={css.setdiv2}>
          <p className={css.kils}>Your weight in kilograms:</p>
          <input
            className={css.inputtext}
            type="text"
            placeholder="0"
            {...register("weight", { required: true })}
            maxLength={25}
          />
          {errors.weight && <p className={css.error}>Weight is required.</p>}
          
          <p className={css.kils}>The time of active participation in sports:</p>
          <input
            className={css.inputtext}
            type="text"
            placeholder="0"
            {...register("activeTime", { required: true })}
            maxLength={25}
          />
          {errors.activeTime && <p className={css.error}>Active time is required.</p>}
          
          <p>
            The required amount of water in liters per day: <span>1.8 L</span>
          </p>
          <h3>Write down how much water you will drink:</h3>
          <input
            className={css.inputtext}
            type="text"
            placeholder="1.8"
            {...register("waterIntake", { required: true })}
            maxLength={25}
          />
          {errors.waterIntake && <p className={css.error}>Water intake is required.</p>}
        </div>
      </div>
      <button className={css.butsave} type="submit">Save</button>
    </form>
  );
};

export default Form;
