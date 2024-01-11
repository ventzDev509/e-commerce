import axios from "axios";
import { set, useForm } from "react-hook-form";
function Login({ login }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitLogin = (data) => {
    if (!errors.email && !errors.passwordUser) {
      try {
        axios
          .post("http://localhost:3000/api/user/login", {
            email: data.email,
            passwordUser: data.passwordUser,
          })
          .then((response) => {
            alert(response.data.msg);
            localStorage.setItem('token',response.data.token)
          });
      } catch (error) {
        console.log("erreur server");
      }
    }
  };
  return (
    <>
      <form
        action="#"
        className="sign-in-form"
        onSubmit={handleSubmit(onSubmitLogin)}
      >
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="email"
            placeholder="Username"
            {...(login && { ...register("email", { required: true }) })}
          />
        </div>

        {
          <span className="errors" style={{ color: "red" }}>
            {errors.email && "Email is required"}
            <p>cc</p>
          </span>
        }
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            {...(login && {
              ...register("passwordUser", { required: true }),
            })}
          />
        </div>
        {errors.passwordUser && (
          <span className="errors" style={{ color: "red" }}>
            {errors.passwordUser && "Password is required"}
            <p>cc</p>
          </span>
        )}

        <input type="submit" value="Login" className="btn solid" />
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
    </>
  );
}

export default Login;
