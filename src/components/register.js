import React from "react";

function Register() {
  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            <div className="text">
              <p>"Join the community of developers"</p>
            </div>
          </div>
          <div className="col-md-6 right">
            <div className="input-box">
              <header>Register</header>
              <div className="input-field">
                <input type="name" className="input" id="name" required />
                <label for="password">Name</label>
              </div>
              <div className="input-field">
                <input type="surname" className="input" id="surname" required />
                <label for="surname">Surname</label>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="input"
                  id="email"
                  required
                  autoComplete="off"
                />
                <label for="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="input"
                  id="password"
                  required
                />
                <label for="password">Password</label>
              </div>

              <div className="input-field">
                <input type="submit" className="submit" value="Register" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
