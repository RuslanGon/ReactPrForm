import css from "../BoxForm/BoxForm.module.css";

const BoxForm = () => {
  return (
    <div className={css.div}>
        <h1 className={css.maintitle}>AquaTrack</h1>
    <form className={css.boxForm}>
      
      <h2 className={css.title}>Sign In</h2>
      <label className={css.label}>
        <span className={css.labelText}>Email</span>
        <input
          type="email"
          name="userEmail"
          placeholder="Enter your email"
          className={css.input}
        />
      </label>
      <label className={css.label}>
        <span className={css.labelText}>Password</span>
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
          className={css.input}
        />
      </label>
      <button type="button" className={css.button}>
        Sign In
      </button>
    </form>
    <p>Don’t have an account? <a href="">Sign Up</a></p>
    </div>
  );
};

export default BoxForm;
