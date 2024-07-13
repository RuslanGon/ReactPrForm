import css from "../Form/Form.module.css";
import vector from '../../image/vector.png'

const Form = () => {
  return (
    <form className={css.setForm}>
      <div className={css.setdivmain}>
        <div className={css.setdiv1}>
          <label>
            <input type="radio" />
            <span>woman</span>
          </label>
          <label>
            <input type="radio" name="" id="" />
            <span>man</span>
          </label>
          <h3>Your name</h3>
          <input type="text" placeholder="Nadia" />
          <h3>Email</h3>
          <input type="email" placeholder="nadia10@gmail.com" />
          <h3>My daily norma</h3>
          <div className={css.divgender}>
            <div className={css.divwoman}>
              <p>For woman:</p>
              <span>V=(M*0,03) + (T*0,4)</span>
            </div>
            <div className={css.divman}>
              <p>For man:</p>
              <span>V=(M*0,04) + (T*0,6)</span>
            </div>
          </div>
          <div>
            <p>
              * V is the volume of the water norm in liters per day, M is your
              body weight, T is the time of active sports, or another type of
              activity commensurate in terms of loads (in the absence of these,
              you must set 0)
            </p>
          </div>
        </div>
        <div>
          <img src={vector} alt="" />
          <p>Active time in hours</p>
        </div>
        <div className={css.setdiv2}></div>
        <p>Your weight in kilograms:</p>
        <input type="text" placeholder="0" />
        <p>The time of active participation in sports:</p>
        <input type="text" placeholder="0" />
        <p>
          The required amount of water in liters per day: <span>1.8 L</span>
        </p>
        <h3>Write down how much water you will drink:</h3>
        <input type="text" placeholder="1.8" />
      </div>
      <button>Save</button>
    </form>
  );
};

export default Form;
