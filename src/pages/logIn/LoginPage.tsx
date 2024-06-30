import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import './LoginPage.css';

function LogInPage() {
  const navigate = useNavigate();
  const { } = useParams();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  return (
    <div className="login-page container d-flex align-items-center justify-content-center">
      <Card style={{ maxWidth: '100%', width: "50rem" }}>
        <Card.Body>
          <div className="50-w p-5 rounded">
            <form className="needs-validation">
              <h3 className="text-center">Sign In</h3>
              <div className="was-validated mb-2">
                <label typeof="text">Username</label>
                <input type="username" required placeholder="Enter Username" className={`form-control ${hasError ? 'is-invalid' : ''}`} value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <div className="invalid-feedback">
                  Please Enter Your Username
                </div>
              </div>
              <div className="was-validated mb-2">
                <label htmlFor="password">Password</label>
                <input type="password" required placeholder="Enter Password" className={`form-control ${hasError ? 'is-invalid' : ''}`} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <div className="invalid-feedback">
                  Please Enter Your Password
                </div>
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
              <div className="row">
                {hasError &&
                  <p className="col-4 error-color">
                    Invalid Credentials
                  </p>
                }
                <p className={`text-end ${hasError ? 'col-8' : 'col-12'}`}>
                  Forgot <a href="">Password?</a><a href="" className="ms-2" onClick={() => navigate('/signup')}>Register</a>
                </p>
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>

    </div>
  );

  function userLogIn() {

    const asyncGetUserLogIn = async () => {
      const url = process.env.BASE_URL + '/login';

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
        setHasError(true);
        //setValidate(true)
      }
    }
    asyncGetUserLogIn()
  }
}

export default LogInPage;