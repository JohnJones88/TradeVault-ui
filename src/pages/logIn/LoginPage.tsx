import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom"

function LogInPage() {
  const navigate = useNavigate();
  const { } = useParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Container className="grow1 flex flex-column py3 py10-sm px3">
        <main>
          <div>
            <form>
              <div data-mdb-input-init className="form-outline mb-4 rounded-coontent-frame rounded-content-frame--white">
                <input type="email" id="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label className="form-label" htmlFor="email">Email address</label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <label className="form-label" htmlFor="password">Password</label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkbox" checked />
                    <label className="form-check-label" htmlFor="checkbox"> Remember me </label>
                  </div>
                </div>

                <div className="col">

                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" onClick={userLogIn}>Log in</button>

              <div className="text-center">
                <p>Not a member? <a href="http://localhost:5000/signup">Register</a></p>
              </div>
            </form>
          </div>
        </main>
      </Container>
    </div>
  );

  function userLogIn() {

    const asyncGetUserLogIn = async () => {
      const url = 'http://localhost:5000/';

      const options = {
        method: 'GET',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
      }
      console.log(options)
      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);
        navigate('/home')
      } catch (error) {
        console.error(error);
      }
    }
    asyncGetUserLogIn()
  }
}

export default LogInPage;