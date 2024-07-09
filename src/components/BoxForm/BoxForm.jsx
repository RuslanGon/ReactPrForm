import css from '../BoxForm/BoxForm.module.css'


const BoxForm = () => {
  return (
    <form>
        <h2>Sign In</h2>
        <label>
            <span>Email</span>
           
            <input type="email" name="userEmail" placeholder="Enter your email" />
        </label>
       
        <label>
            <span>Password</span>
           
            <input type="text" name="password" placeholder="Enter your password" />
        </label>
        
        <button type="button">Sign In</button>
    </form>
  )
}

export default BoxForm