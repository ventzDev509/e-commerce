import "./css/popular.css";
import chapo from "../../media/produit/produit23.png";
import monte from "../../media/produit/produit29.png";
import { useEffect, useState } from "react";
import axios from "axios";
function Popular() {
  const [newAdd, setNewAdd] = useState([]);
  const getByNewAdd = async () => {
    await axios
      .get("http://localhost:3000/api/produit/new-add")
      .then((response) => {
        console.log(response.data);
        setNewAdd(response.data);
      });
  };
  useEffect(() => {
    getByNewAdd();
  }, []);
  return (
    <>
      <div className="popular section-wrapper" id="popular">
        <div className="flex-header">
          <h2>Popular deals</h2>
          <a href="">See all</a>
        </div>
        <div className="items">
          {newAdd.map((e,index) => (
            <div className="popular-item" key={index}>
              <div
                className="popular-img"
                style={{ backgroundImage: `url(${e.image_produit})` }}
              ></div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default Popular;
