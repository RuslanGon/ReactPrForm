import css from "../Form/Form.module.css";
import vector from '../../image/vector.png'

const Form = () => {
  return (
    <form className={css.setForm}>
      <div className={css.setdivmain}>
        <div className={css.setdiv1}>
          <label className={css.label}>
            <input className={css.radio} type="radio" />
            <span className={css.man}>woman</span>
          </label>
          <label className={css.label}>
            <input className={css.radio} type="radio" name="" id="" />
            <span className={css.man}>man</span>
          </label>
          <h3>Your name</h3>
          <input className={css.inputtext} type="text" placeholder="Nadia" />
          <h3>Email</h3>
          <input
            className={css.inputtext}
            type="email"
            placeholder="nadia10@gmail.com"
          />
          <h3>My daily norma</h3>
          <div className={css.divgender}>
            <div className={css.divwoman}>
              <p className={css.forman}>For woman:</p>
              <span className={css.formula}>V=(M*0,03) + (T*0,4)</span>
            </div>
            <div className={css.divman}>
              <p className={css.forman}>For man:</p>
              <span className={css.formula}>V=(M*0,04) + (T*0,6)</span>
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
      </div>
      <button className={css.butsave}>Save</button>
    </form>
  );
};

export default Form;
