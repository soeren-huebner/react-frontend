import React, { useState, useEffect } from "react";

function Login() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://a82150d.online-server.cloud:8080/user").then(response =>
        response.json()).then(data =>
        console.log(data))
  });

  return (
     <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Login</h1>
            <div>
              <a href="http://a82150d.online-server.cloud:8080/login">
               <button type="button">
                    Twitter Login
               </button>
              </a>
            </div>
            <div>
              <a href="http://a82150d.online-server.cloud:8080/logout">
               <button type="button">
                    Twitter Logout
               </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
