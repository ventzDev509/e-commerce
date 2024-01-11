import "./css/categorie.css";
import chapo from "../../media/produit/produit23.png";
import monte from "../../media/produit/produit29.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Categorie() {
  const [categorieData, setCategorie] = useState([]);
  const getCategorie = async () => {
    await axios
      .get("http://localhost:3000/api/categorie/all")
      .then((response) => {
        setCategorie(response.data);
        console.log(response.data[0].categorieImage);
      });
  };
  useEffect(() => {
    getCategorie();
  }, []);
  return (
    <>
      <div className="categories section-wrapper">
        <div className="flex-header">
          <h2>Categories</h2>
          <Link to={"/Categorie"}>See all</Link>
        </div>
        <div className="items">
         
          {categorieData.map((e, index) => (
            <div className="item" key={index}>
              <div
                className="item-img"
                style={{ backgroundImage: `url(${e.categorieImage})` }}
              ></div>
              <h4>{e.categorieName}</h4>
            </div>
          ))}
          {/* 
          <div className="item">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${monte})` }}
            ></div>
            <h4>Femme</h4>
          </div>
          <div className="item">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${chapo})` }}
            ></div>
            <h4>Enfant</h4>
          </div>
          <div className="item">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${chapo})` }}
            ></div>
            <h4>Lunette</h4>
          </div>
          <div className="item">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${chapo})` }}
            ></div>
            <h4>Chapo</h4>
          </div>
          <div className="item">
            <div
              className="item-img"
              style={{ backgroundImage: `url(${monte})` }}
            ></div>
            <h4>Monte</h4>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Categorie;
