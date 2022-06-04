import './App.css';

function App() {
  return (
    <div className="login">
      <h2>Sign In</h2>
      <form>
        <div className='input-group'>
          <input type="text" name="name" required="rquired"/>
          <span>Username</span>
        </div>
        <div className='input-group'>
          <input type="password" name="password" required="required"/>
          <span>Password</span>
        </div>
        <div className='input-group'>
          <input type="submit" value="Login" />
        </div>
      </form>
      <a href="#">Forgot Password <span>Click Here</span></a>
    </div>
  );
}

export default App;
