import css from "../Form/Form.module.css";

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
        </div>
        <div className={css.setdiv2}></div>
      </div>
    </form>
  );
};

export default Form;
