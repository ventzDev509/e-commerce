import { useEffect, useState } from "react";
import registersvg from "../../../assets/media/icons/register.svg";
import Loginsvg from "../../../assets/media/icons/log.svg";
import "./index.css";
import { set, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterLogin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [stape1, setStape1] = useState(false);
  const onSubmitSignIn = async (data) => {
    if (data.ville !== "" && data.adresse !== "" && data.dateNaissance !== "") {
      alert("");
      setStape1(true);
    } else {
      alert("mm");
    }
    if (stape1) {
      await axios
        .post(
          "http://localhost:3000/api/becomeVendeur",
          {
            ville: data.ville,
            address: data.adresse,
            dateNaissance: data.dateNaissance,
            nom_entreprise: data.nom_entreprise,
            description_entreprise: data.description,
            numero_transfere: data.numero_t,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          alert(response.data.msg);
        });
    }
  };
  const back = () => {
    setStape1(false);
  };

  return (
    <>
      <div className={"container-content sign-up-mode"} id="becomeSeller">
        <div id="registerLogin">
          <div className="forms-container">
            <div className="signin-signup">
              <form
                action="#"
                className="sign-up-form"
                onSubmit={handleSubmit(onSubmitSignIn)}
              >
                <h2 className="title">Become an seller</h2>
                <div className={stape1 ? "stepe1 active" : "stepe1"}>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      placeholder="Ville"
                      {...register("ville", {
                        required: "le champ ville  ne peut pas etre vide ",
                        min: 5,
                        pattern: {
                          value: /^[A-Za-z][A-Za-z0-9]*$/i,
                          message:
                            "Le champ doit commencer par une lettre et ne peut contenir que des lettres et des chiffres.",
                        },
                      })}
                    />
                  </div>
                  {/* error msg */}
                  {
                    <span className="errors" style={{ color: "red" }}>
                      {errors.ville && errors.ville.message}
                      <p>cc</p>
                      <p>cc</p>
                    </span>
                  }

                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      placeholder="Adresse"
                      {...register("adresse", {
                        required: "le champ Adresse ne peut pas etre vide ",
                        min: 5,
                        pattern: {
                          value: /^[A-Za-z][A-Za-z0-9]*$/i,
                          message:
                            "Le champ doit commencer par une lettre et ne peut contenir que des lettres et des chiffres.",
                        },
                      })}
                    />
                  </div>
                  {/* error msg */}
                  {
                    <span className="errors" style={{ color: "red" }}>
                      {errors.adresse && errors.adresse.message}
                      <p>cc</p>
                    </span>
                  }

                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="date"
                      placeholder="dateNaissance"
                      {...register("dateNaissance", {
                        // required: "le champ Date naissance ne peut pas etre vide ",
                      })}
                    />
                  </div>
                  {/* error msg */}
                  {
                    <span className="errors" style={{ color: "red" }}>
                      {errors.dateNaissance && errors.dateNaissance.message}
                      <p>cc</p>
                    </span>
                  }
                </div>

                {/* //step2  */}
                <div className={stape1 ? "stepe2 active" : "stepe2 "}>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      placeholder="Nom Entreprise"
                      {...(stape1 && {
                        ...register("nom_entreprise", {
                          required:
                            "le champ Nom  de l'entreprise ne peut pas etre vide ",
                          min: 5,
                          pattern: {
                            value: /^[A-Za-z][A-Za-z0-9]*$/i,
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
                      {errors.nom_entreprise && errors.nom_entreprise.message}
                      <p>cc</p>
                    </span>
                  }

                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      placeholder="description"
                      {...(stape1 && {
                        ...register("description", {
                          required:
                            "le champ  description ne peut pas etre vide ",
                          min: 5,
                        }),
                      })}
                    />
                  </div>
                  {/* error msg */}
                  {
                    <span className="errors" style={{ color: "red" }}>
                      {errors.description && errors.description.message}
                      <p>cc</p>
                    </span>
                  }

                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      placeholder="Telephone Moncash"
                      {...(stape1 && {
                        ...register("numero_t", {
                          required:
                            "le champ  Telephone moncash ne peut pas etre vide ",
                          min: 5,
                          pattern: {
                            value: /^(?:\d{4}[-\s]?\d{4})$/,
                            message:
                              "Le champ telephone moncash doit invalide.",
                          },
                        }),
                      })}
                    />
                  </div>
                  {/* error msg */}
                  {
                    <span className="errors" style={{ color: "red" }}>
                      {errors.numero_t && errors.numero_t.message}
                      <p>cc</p>
                    </span>
                  }
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
                    value={stape1 ? "BECOME SELLER" : "Next"}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, ex ratione. Aliquid!
                </p>
                <Link to={"/Form/Register"}>
                  <button
                    className="btn transparent"
                    id="sign-up-btn"
                    type="submit"
                  >
                    Sign up
                  </button>
                </Link>
              </div>
              <img src={Loginsvg} className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum laboriosam ad deleniti.
                </p>
                <Link to={""}>
                  <button className="btn transparent" id="sign-in-btn">
                    Sign in
                  </button>
                </Link>
              </div>
              <img src={registersvg} className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterLogin;
