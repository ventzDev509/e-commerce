import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
function RegisterForm({ login }) {
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [stape1, setStape1] = useState(false);
  const [loginSucces, setLoginSuccess] = useState(false);
  const onSubmitSignIn = (data) => {
    if (
      data.firstName !== "" &&
      data.lastName !== "" &&
      data.telephone !== ""
    ) {
      setStape1(true);
      if (stape1) {
        axios
          .post("http://localhost:3000/api/user/new", {
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.addresse,
            telephone: data.telephone,
            email: data.email,
            passwordUser: data.password,
          })
          .then((response) => {
            alert(response.data.msg);
            if (response.data.msg == "cette email est deja utiliser") {
              setStape1(true);
            } else if (
              response.data.msg ==
              "Telephone existe deja dans la base de donnees"
            ) {
              setStape1(false);
            } else if (response.data.msg == "Compte ajouter avec success") {
              setLoginSuccess(true);
              redirect("/Form/Login");

              setTimeout(() => {
                setLoginSuccess(false);
                setStape1(false);
              }, 1000);
            }
          });
      }
    }
  };
  const back = () => {
    setStape1(false);
  };
  return (
    <>
      <form
        action="#"
        className="sign-up-form"
        onSubmit={handleSubmit(onSubmitSignIn)}
      >
        <h2 className="title">Sign up</h2>

        {/* step 1 sign in  */}
        <div className={stape1 ? "stepe1 active" : "stepe1"}>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="First name"
              {...(loginSucces && { value: "" })}
              {...(login
                ? ""
                : {
                    ...register("firstName", {
                      required: "le champ first name ne peut pas etre vide ",
                      min: 5,
                      pattern: {
                        value: /^[A-Za-z][A-Za-z0-9 ]*$/i ,
                        message:
                          "Le champ doit commencer par une lettre et ne peut contenir que des lettres et des chiffres.",
                      },
                    }),
                  })}
            />
          </div>
          {/* error msg */}
          {
            <span className="errors" style={{ color: "red" }}>
              {errors.firstName && errors.firstName.message}
              <p>cc</p>
            </span>
          }

          <div className="input-field">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Last Name"
              {...(loginSucces && { value: "" })}
              {...(login
                ? ""
                : {
                    ...register("lastName", {
                      required: "Le champ last Name ne peut pa etre vide",
                      min: 5,
                      pattern: {
                        value: /^[A-Za-z][A-Za-z0-9 ]*$/i,
                        message:
                          "Le champ doit commencer par une lettre et ne peut contenir que des lettres et des chiffres.",
                      },
                    }),
                  })}
            />
          </div>
          {/* error msg */}

          <span className="errors" style={{ color: "red" }}>
            {errors.lastName && errors.lastName.message}
            <p>cc</p>
          </span>

          <div className="input-field">
            <i className="fas fa-phone" aria-hidden="true"></i>
            <input
              type="text"
              placeholder="Telephone"
              {...(loginSucces && { value: "" })}
              {...(login
                ? ""
                : {
                    ...register("telephone", {
                      required: "Le champ telephone ne peux pas etre vide",
                      pattern: {
                        value: /^(?:\d{4}[-\s]?\d{4})$/,
                        message: "Le numero saisir est invalide",
                      },
                    }),
                  })}
            />
          </div>
          {/* error msg */}

          <span className="errors" style={{ color: "red" }}>
            {errors.telephone && errors.telephone.message}
            <p>cc</p>
          </span>
        </div>

        {/* stape2 sign in  */}
        <div className={stape1 ? "stepe2 active" : "stepe2 "}>
          <div className="input-field">
            <i className="fas fa-map-marker"></i>
            <input
              type="text"
              placeholder="Adresse"
              {...(loginSucces && { value: "" })}
              {...(stape1 && {
                ...register("addresse", {
                  required: "Le champ addresse ne peut pas etre vide",
                }),
              })}
            />
          </div>
          {/* error msg */}

          <span className="errors" style={{ color: "red" }}>
            {errors.addresse && errors.addresse.message}
            <p>cc</p>
          </span>

          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              {...(loginSucces && { value: "" })}
              {...(stape1 && {
                ...register("email", {
                  required: "Le champ email ne peut pas etre vide",
                }),
              })}
            />
          </div>
          {/* error msg */}

          <span className="errors" style={{ color: "red" }}>
            {errors.email && errors.email.message}
            <p>cc</p>
          </span>

          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              {...(loginSucces && { value: "" })}
              {...(stape1 && {
                ...register("password", {
                  required: "Le champ password ne peut pas etre vide",
                }),
              })}
            />
          </div>
          {/* error msg */}

          <span className="errors" style={{ color: "red" }}>
            {errors.password && errors.password.message}
            <p>cc</p>
          </span>
        </div>
        <div className="flex">
          {stape1 && (
            <input
              type="submit"
              className="btn back"
              value="Back"
              onClick={back}
            />
          )}
          <input
            type="submit"
            className="btn"
            value={stape1 ? "Sign up" : "Next"}
          />
        </div>

        <p className="social-text">Or Sign up with social platforms</p>
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
export default RegisterForm;
