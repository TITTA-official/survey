import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const Register = async (e) => {
    e.preventDefault();
    console.log(type);
    try {
      let res = await axios.post("/auth/register", {
        username: name,
        email: email,
        password: password,
        confPassword: confPassword,
        type: type !== "" && type,
      });
      console.log(res);
      if (res.status === 201) {
        if (res.data.user.type === "superadmin") {
          history.push("/dashboard-superadmin");
        } else if (res.data.user.type === "admin") {
          history.push("/dashboard-admin");
        } else {
          history.push("/dashboard");
        }
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(msg);
      }
    }
  };
  return (
    <div>
      <div className="Signup-pics min-h-screen w-screen text-[white] ">
        {/* <img className='object-contain w-full h-full' src="../loginpics.jpg" alt="" /> */}
        <div className="flex items-center justify-center w-full h-full py-5 login-img ">
          <form
            onSubmit={Register}
            className="signup-form md:max-w-lg w-[90%] gap-7 min-h-[50vh]  bg-glass py-6 px-4 flex flex-col justify-between items-center shadow"
          >
            <div className="logo w-[128px] drop-shadow-2xl">
              <img src="../logo.png" className="w-full h-full" alt="" />
            </div>
            <div className="mb-2 text-sm info opacity-80">
              <span>
                Already have an account?{" "}
                <Link to="/">
                  <span className="underline cursor-pointer">Login</span>
                </Link>
              </span>
            </div>
            <p>{msg}</p>
            <div className="flex items-center justify-between w-full input-group md:text-lg md:px-9">
              <label htmlFor="username">User Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                className="w-[70%] text-base rounded bg-glass px-3 py-3 text-[#000]"
              />
            </div>
            <div className="flex items-center justify-between w-full input-group md:text-lg md:px-9">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="w-[70%] text-base rounded bg-glass px-3 py-3 text-[#000]"
              />
            </div>
            <div className="flex items-center justify-between w-full input-group md:text-lg md:px-9">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                className="w-[70%] text-base rounded bg-glass px-3 py-2 text-[#000]"
              />
            </div>
            <div className="flex items-center justify-between w-full input-group md:text-lg md:px-9">
              <label htmlFor="confpassword">Confirm Password</label>
              <input
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                type="password"
                required
                className="w-[70%] text-base rounded bg-glass px-3 py-2 text-[#000]"
              />
            </div>
            <div className="flex items-center justify-start w-full gap-3 input-group md:text-lg md:px-9">
              <input
                value="admin"
                onChange={(e) => setType(e.target.value)}
                type="checkbox"
                id="type"
              />
              <label htmlFor="type" className="text-sm">
                Register as an Administrator
              </label>
            </div>
            <div className="w-full signupbtn md:px-9">
              <button className="w-full px-5 py-3 mt-5 text-base border-none rounded bg-glass md:text-lg">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
