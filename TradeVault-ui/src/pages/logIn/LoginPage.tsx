import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

function LogInPage() {
  const navigate = useNavigate();
  const { } = useParams();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-50">
      <div className="50-w p-5 rounded">
        <form>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label typeof="text">Username</label>
            <input type="username" placeholder="Enter Username" className="form-control" value={username} onChange={(e) => { setUsername(e.target.value) }} />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className="mb-2">
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="button" onClick={userLogIn}>Log in</button>
          </div>
          <p className="text-end mt-2">
            Forgot <a href="">Password?</a><a href="" className="ms-2" onClick={() => navigate('/signup')}>Register</a>
          </p>
        </form>
      </div>
    </div>
  );

  function userLogIn() {

    const asyncGetUserLogIn = async () => {
      const url = 'http://localhost:5000/login';

      const options = {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({ user_name: username, password: password })
      }
      console.log(options)
      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);

        localStorage.setItem('profile-token', data.token)

        navigate('/home')
      } catch (error) {
        console.error(error);
      }
    }
    asyncGetUserLogIn()
  }
}

export default LogInPage;