import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [, setUser] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const Auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await axios.post("/auth/login", {
        email: email,
        password: password,
      });
      //console.log(res);
      setLoading(false);
      if (res.status === 200) {
        let data = res.data;
        localStorage.setItem("token", data.token);
        setUser(data.user);
        if (data.user.type === "superadmin") {
          navigate("/dashboard-superadmin");
        } else if (data.user.type === "admin") {
          navigate("/dashboard-admin");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error) {
        setMsg(error.response.data.error);
      }
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
            {msg && <p className="text-xs text-red-500">{msg}</p>}
            <div className="flex items-center justify-between w-full input-group md:px-9">
              <label htmlFor="username" className="text-sm md:text-base">
                Email
              </label>
              <input
                type="email"
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
              <button
                disabled={loading}
                className="w-full px-5 py-3 mt-5 text-base border-none rounded bg-glass md:text-lg"
              >
                {loading ? "Loading...." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
