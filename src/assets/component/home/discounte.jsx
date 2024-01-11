
import "./css/discount.css"
import ch from "../../media/produit/product_img4.jpg"
import chapo from "../../media/produit/produit23.png"
import monte from "../../media/produit/produit29.png"
function Discount(){
    return<>
      <div className="promo">
            <div className="items promo-items">
                <div className="promo-item">
                    <div className="promo-img" style={{backgroundImage:`url(${chapo})`}}></div>
                    <div className="promo-info">
                        <h3>30% Discount</h3>
                        <p>Order any item from app and get discount</p>
                        <a href="">Order now</a>
                    </div>
                </div>
                <div className="promo-item">
                    <div className="promo-img" style={{backgroundImage:`url(${monte})`}}></div>
                    <div className="promo-info">
                        <h3>30% Discount</h3>
                        <p>Order any item from app and get discount</p>
                        <a href="">Order now</a>
                    </div>
                </div>
                {/* <div className="promo-item">
                    <div className="promo-img" style={{backgroundImage:`url(${chapo})`}}></div>
                    <div className="promo-info">
                        <h3>30% Discount</h3>
                        <p>Order any item from app and get discount</p>
                        <a href="">Order now</a>
                    </div>
                </div> */}
            </div>
        </div>
    </>
}
export default Discount;