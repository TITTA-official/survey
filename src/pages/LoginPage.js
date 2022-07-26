import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("/auth/login", {
        email: email,
        password: password,
      });
      console.log(res);
      if (res.status === 200) {
        if (res.data.user.type === "superadmin") {
          history.push("/dashboard-superadmin");
        } else if (res.data.user.type === "admin") {
          history.push("/dashboard-admin");
        } else {
          history.push("/dashboard");
        }
      }
    } catch (error) {
      console.log(error);
      // if (error.response) {
      //     setMsg(error.response.data.msg);
      //     console.log(msg)
      // }
    }
  };

  return (
    <div>
      <div className="Signup-pics h-screen w-screen text-[white] ">
        {/* <img className='object-contain w-full h-full' src="../loginpics.jpg" alt="" /> */}
        <div className="flex items-center justify-center w-full h-full login-img ">
          <form
            onSubmit={Auth}
            className="signup-form md:max-w-lg w-[90%] min-h-[40vh] bg-glass py-6 px-4 flex flex-col gap-8 items-center shadow"
          >
            <div className="logo w-[128px] drop-shadow-2xl">
              <img src="../logo.png" className="w-full h-full" alt="" />
            </div>
            <div className="mb-2 text-sm info opacity-80">
              <span>
                Don't have an account yet?{" "}
                <Link to="/register">
                  <span className="underline cursor-pointer">Signup</span>
                </Link>
              </span>
            </div>
            <p>{msg}</p>
            <div className="flex items-center justify-between w-full input-group md:px-9">
              <label htmlFor="username" className="text-sm md:text-base">
                User Name
              </label>
              <input
                type="text"
                className="w-[70%] text-base rounded bg-glass px-3 py-2 text-[#000]"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between w-full input-group md:px-9">
              <label htmlFor="password" className="text-sm md:text-base">
                Password
              </label>
              <input
                type="password"
                className="w-[70%] text-base rounded bg-glass px-3 py-2 text-[#000]"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full signupbtn md:px-9">
              <button className="w-full px-5 py-3 mt-5 text-base border-none rounded bg-glass md:text-lg">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
