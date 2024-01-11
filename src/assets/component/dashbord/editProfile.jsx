import { useState } from "react";
import "./css/index.css";
import { useForm } from "react-hook-form";
import LinkM from "./link";
import "./css/editeProfile.css";
function EditeProfile() {
  // treteman done nan fomile  ah
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // valide donne yo pou voye bay api ah
  const onSubmit = (data) => {
    console.log(data);
    alert("ok");
  };
  // fin

  const [slide, setslide] = useState(false);
  const menuC = () => {
    setslide(!slide);
    if (!slide) {
      setslide(false);
    } else {
      setslide(true);
    }
    setslide((prev) => !prev);
  };
  return (
    <>
      <div
        id="wrapper"
        className={slide ? "wrapper-content toggled " : "wrapper-content"}
      >
        <LinkM />

        <div id="page-content-wrapper">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  className="btn-menu  btn-success btn-toggle-menu"
                  type="button"
                  onClick={menuC}
                >
                  <i className="fa fa-bars"></i>
                </button>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="ti-panel"></i>
                      <p>Stats</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-settings"></i>
                      <p>Settings</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="row " style={{ marginTop: "20px" }}>
              <div className="col-xl-4">
                {/* <!-- Profile picture card--> */}
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Profile Picture</div>
                  <div className="card-body text-center">
                    {/* <!-- Profile picture image--> */}
                    <img
                      className="img-account-profile rounded-circle mb-2"
                      src="http://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                    {/* <!-- Profile picture help block--> */}
                    <div className="small font-italic text-muted mb-4">
                      JPG or PNG no larger than 5 MB
                    </div>
                    {/* <!-- Profile picture upload button--> */}
                    <button className="btn btn-primary" type="button">
                      Upload new image
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                {/* <!-- Account details card--> */}
                <div className="card mb-4">
                  <div className="card-header">Account Details</div>
                  <div className="card-body">
                    <form
                      method="post"
                      className="form"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      {/* <!-- Form Group (username)--> */}
                      {/* <div class="mb-3">
                        <label class="small mb-1" for="inputUsername">
                          Username (how your name will appear to other users on
                          the site)
                        </label>
                        <input
                          class="form-control"
                          id="inputUsername"
                          type="text"
                          placeholder="Enter your username"
                         
                        />
                      </div> */}
                      {/* <!-- Form Row--> */}

                      {/* <!-- Form Row--> */}
                      <div className="row  mb-3 fl">
                        {/* <!-- Form Group (first name)--> */}
                        <div className="col">
                          <label
                            className="small mb-1"
                            htmlFor="inputFirstName"
                          >
                            Nom
                          </label>
                          <input
                            className="form-control"
                            id="inputFirstName"
                            type="text"
                            placeholder="Enter your first name"
                            {...register("fisrtname", {
                              required: "Le champ nom ne peut pas etre vide",
                              pattern: {
                                value: /^[A-Za-z][A-Za-z0-9 ]*$/i,
                                message:
                                  "Le champ doit commencer par une lettre et ne peut contenir que des lettres et des chiffres.",
                              },
                            })}
                          />
                        </div>

                      
                        {/* <!-- Form Group (last name)--> */}
                        <div className="col">
                          <label className="small mb-1" htmlFor="inputLastName">
                            Prenom
                          </label>
                          <input
                            className="form-control"
                            id="inputLastName"
                            type="text"
                            placeholder="Enter your last name"
                            {...register("lastName", {
                              required:
                                "Le champ last Name ne peut pa etre vide",
                              min: 5,
                              pattern: {
                                value: /^[A-Za-z][A-Za-z0-9 ]*$/i,
                                message:
                                  "Le champ doit commencer par une lettre et ne peut contenir que des lettres et des chiffres.",
                              },
                            })}
                          />
                        </div>
                      </div>

                      {/* end of register first and lastName */}

                      {/* register birthday and sexe  */}
                      {/* <!-- Form Row        --> */}
                      <div className="row mb-3 fl">
                        {/* <!-- Form Group (birthday)--> */}
                        <div className="col">
                          <label className="small mb-1" htmlFor="inputOrgName">
                            Date de naissance
                          </label>
                          <input
                            className="form-control"
                            id="dateNaissance"
                            type="date"
                            placeholder="Enter your organization name"
                            {...register("dateNaissance", {})}
                          />
                        </div>

                        {/* <!-- Form Group (sexe)--> */}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputPhone">
                           Sexe
                          </label>
                          <select
                            {...register("gender")}
                            className="form-control"
                            id=""
                          >
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                          </select>
                        </div>
                      </div>

                      {/* <!-- Form Row--> */}
                      <div className="row fl mb-3">
                        {/* <!-- Form Group (phone number)--> */}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputPhone">
                            Ville
                          </label>
                          <select
                            {...register("gender")}
                            className="form-control"
                            id=""
                          >
                            <option value="female">Cap-haitien</option>
                            <option value="male">Port-au-prince</option>
                            <option value="other">other</option>
                          </select>
                        </div>
                        <div className="col">
                          <label className="small mb-1" htmlFor="inputLocation">
                            Location
                          </label>
                          <input
                            className="form-control"
                            id="inputLocation"
                            type="text"
                            placeholder="Enter your location"
                          />
                        </div>
                      </div>

                      {/* <!-- Form Row--> */}
                      <div className="row  mb-3 fl">
                        {/* <!-- Form Group (phone number)--> */}
                        <div className="col">
                          <label className="small mb-1" htmlFor="inputPhone">
                            Phone number
                          </label>
                          <input
                            className="form-control"
                            id="inputPhone"
                            type="tel"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        {/* <!-- Form Group (birthday)--> */}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputBirthday">
                            Birthday
                          </label>
                          <input
                            className="form-control"
                            id="inputBirthday"
                            type="text"
                            name="birthday"
                            placeholder="Enter your birthday"
                          />
                        </div>
                      </div>
                      {/* <!-- Save changes button--> */}
                      <button className="btn btn-primary" type="submit">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditeProfile;
