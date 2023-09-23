import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/login/login.jpg";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import useTitle from "../customhooks/useTitle";
import { DataProvider } from "../providers/AuthProvider";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("DineEase | Login");
  const { signInWithEmail, googleLogin } = useContext(DataProvider);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const captcha = data.captcha;
    if (validateCaptcha(captcha)) {
      signInWithEmail(data.email, data.password)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Sign In Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        })
        .catch((error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Captcha is not correct",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    // console.log(data.captcha);
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log(result.user);
        const user = result.user;
        const currentUser = {
          name: user.displayName,
          email: user.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then(() => {
            // console.log(data);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Login successful",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <section className="min-h-screen flex items-stretch text-white">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Dine<span className="text-red-700">Ease</span>
          </h1>
          <p className="text-3xl my-4">Order Your Favorite Food Anytime.</p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <a href="https://twitter.com/?lang=en">
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100066076810758">
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/">
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 w-full bg-black flex items-center">
        <div className="py-12 lg:py-24 px-4 lg:px-24 mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-extrabold tracking-wide">
            Sign in and order in discount
          </h1>
          <p className="text-gray-500 mt-4">Join us to get unique offers</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
            <div>
              <div className="mb-2 text-left">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-white tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 text-white text-base py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline border-2 border-gray-700 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-xl text-red-700">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-2 text-left">
                <label
                  htmlFor="password"
                  className="text-sm font-bold text-white tracking-wide"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-gray-800 text-white text-base py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline border-2 border-gray-700 focus:border-blue-500 transition-colors"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~]).*$/,
                      message:
                        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-xl text-red-700">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mb-2 text-left">
                <label
                  htmlFor="captcha"
                  className="text-sm font-bold tracking-wide"
                >
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  className="w-full bg-gray-800 text-white text-base py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline border-2 border-gray-700 focus:border-blue-500 transition-colors"
                  placeholder="Enter captcha above"
                  required
                  {...register("captcha")}
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="submit"
              >
                Sign in
              </button>
              <div className="text-sm font-semibold text-gray-300 text-center mt-2">
                or
              </div>
              <div className="mt-4">
                <button
                  onClick={handleGoogleLogin}
                  className="text-blue-500 text-sm font-semibold"
                >
                  Sign in with Google
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm font-semibold text-gray-300 text-center">
                Dont have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-400"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
