import "./css/most-buy.css";
import "./css/popular.css";
import chapo from "../../media/produit/produit23.png";
import monte from "../../media/produit/produit29.png";
import star from "../../media/icons/star.png"
import axios from "axios";
import { useEffect, useState } from "react";

function Most_buy() {
  const[newAdd,setNewAdd]=useState('')
  const getByNewAdd=async ()=>{
    
    await axios.get('http://localhost:3000/api/produit/new-add')
    .then(response=>{
      console.log(response.data)
      setNewAdd(response.data)
    })
  }
  useEffect(()=>{
    getByNewAdd()
  },[])
  return (
    <>
      <div id="most-buy">
        <div className="popular section-wrapper" id="popular">
          <div className="flex-header">
            <h2>Popular deals</h2>
            <a href="">See all</a>
          </div>
          <div className="items">
            <div className="popular-item">
              <div
                className="popular-img"
                style={{ backgroundImage: `url(${chapo})` }}
              ></div>
              <div className="item_buy">
                <h4>Chapo</h4>
                <div className="flex">
                   <div className="left_price">
                   $10
                   </div>
                   <div className="right_star">
                    <img className="star" src={star} alt="" />(300 sell)
                   </div>
                </div>
              </div>
            </div>
            <div className="popular-item">
              <div
                className="popular-img"
                style={{ backgroundImage: `url(${monte})` }}
              ></div>
                <div className="item_buy">
                <h4>Chapo</h4>
                <div className="flex">
                   <div className="left_price">
                   $10
                   </div>
                   <div className="right_star">
                    <img className="star" src={star} alt="" />(300 sell)
                   </div>
                </div>
              </div>
            </div>
            <div className="popular-item">
              <div
                className="popular-img"
                style={{ backgroundImage: `url(${chapo})` }}
              ></div>
                <div className="item_buy">
                <h4>Chapo</h4>
                <div className="flex">
                   <div className="left_price">
                   $10
                   </div>
                   <div className="right_star">
                    <img className="star" src={star} alt="" />(300 sell)
                   </div>
                </div>
              </div>
            </div>
            <div className="popular-item">
              <div
                className="popular-img"
                style={{ backgroundImage: `url(${monte})` }}
              ></div>
                <div className="item_buy">
                <h4>Chapo</h4>
                <div className="flex">
                   <div className="left_price">
                   $10
                   </div>
                   <div className="right_star">
                    <img className="star" src={star} alt="" />(300 sell)
                   </div>
                </div>
              </div>
            </div>

            <div className="popular-item">
              <div
                className="popular-img"
                style={{ backgroundImage: `url(${monte})` }}
              ></div>
                <div className="item_buy">
                <h4>Chapo</h4>
                <div className="flex">
                   <div className="left_price">
                   $10
                   </div>
                   <div className="right_star">
                    <img className="star" src={star} alt="" />(300 sell)
                   </div>
                </div>
              </div>
            </div>

            <div className="popular-item">
              <div
                className="popular-img"
                style={{ backgroundImage: `url(${monte})` }}
              ></div>
                <div className="item_buy">
                <h4>Chapo</h4>
                <div className="flex">
                   <div className="left_price">
                   $10
                   </div>
                   <div className="right_star">
                    <img className="star" src={star} alt="" />(300 sell)
                   </div>
                </div>
              </div>
            </div>

            <div className="popular-item">
              <div
                className="popular-img"
                style={{ backgroundImage: `url(${monte})` }}
              ></div>
                <div className="item_buy">
                <h4>Chapo</h4>
                <div className="flex">
                   <div className="left_price">
                   $10
                   </div>
                   <div className="right_star">
                    <img className="star" src={star} alt="" />(300 sell)
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

export default Most_buy;
