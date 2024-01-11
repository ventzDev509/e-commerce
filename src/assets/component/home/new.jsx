import "./css/discount.css";
import "./css/news.css"
import banner1 from "../../media/icons/banner2.jpg";
import chapo from "../../media/produit/produit23.png";
import monte from "../../media/produit/produit29.png";
function News() {
    
  return (
    <>
      <div className="promo" id="news">
        <div className="item">
          <div className="promo-item_">
            <div
              className="promo-img"
              style={{ backgroundImage: `url(${banner1})` }}
            >
              <div className="item_">
                <div className="center">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p className="cta-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  itaque consequatur alias blanditiis, amet quae soluta
                  distinctio dolore nesciunt eveniet?
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default News;
