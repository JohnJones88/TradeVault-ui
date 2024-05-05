import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

function SignUpPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-50">
      <div className="50-w p-5 rounded">
        <form>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label typeof="text">First Name</label>
            <input type="firstName" placeholder="Enter First Name" className="form-control" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
          </div>
          <div className="mb-2">
            <label typeof="text">Last Name</label>
            <input type="firstName" placeholder="Enter Last Name" className="form-control" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="mb-2">
            <label typeof="text">Username</label>
            <input type="username" placeholder="Enter Username" className="form-control" value={username} onChange={(e) => { setUsername(e.target.value) }} />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className="d-grid mt-2">
            <button className="btn btn-primary" type="button" onClick={SignUp}>Log in</button>
          </div>
          <p className="text-end mt-2">
            Already Registered? <a href="" className="ms-2" onClick={() => navigate('/')}>Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );

  function SignUp() {
    const asyncSignUp = async () => {
      const url = 'http://localhost:5000/signup';

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, user_name: username, password: password })
      }
      console.log(options)
      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);
        navigate('/')
      } catch (error) {
        console.error(error);
      }
    }
    asyncSignUp();
  }
}

export default SignUpPage;