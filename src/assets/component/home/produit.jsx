import { BsCartPlusFill } from "react-icons/bs";
import chapo from "../../media/produit/produit23.png";
import monte from "../../media/produit/best_selling_1.jpg";
import phone from "../../media/produit/20221007_182048.jpg";
import sd from "../../media/produit/20221008_192150.jpg";
import ch from "../../media/produit/product_img4.jpg";
import "./css/most-popular.css";
import Like from "../Buttons/like";
import { Link } from "react-router-dom";
function Produit({ title }) {
  return (
    <>
      <div className="popular section-wrapper" id="most-popular">
        <div className="flex-header">
          <h2>Categories</h2>
          <Link to={"/Categorie"}>See all</Link>
        </div>

        <div className="containr">
          <div className="row_">
           
            <div className="item">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img
                      className="pic-1"
                      src={monte}
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Shirt</a>
                  </h3>
                  <div className="price">
                    $11.00
                    <span>$14.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-2.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Red Top</a>
                  </h3>
                  <div className="price">
                    $8.00
                    <span>$12.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-3.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Shirt</a>
                  </h3>
                  <div className="price">
                    $11.00
                    <span>$14.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-4.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Shirt</a>
                  </h3>
                  <div className="price">
                    $11.00
                    <span>$14.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li>
                    <a href="" data-tip="Quick View">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Produit;
