import "./css/footer.css"
import card from "../../media/icons/card_img.png"
function Footer() {
  return (  <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand-wrapper">
              <a href="./index.html" className="logo">
                <img src="./assets/images/logo.svg" alt="" />
              </a>

              <ul className="footer-list">
                <li>
                  <a href="./index.html" className="footer-link">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Favorie
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Panier
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="divider"></div>

            <div className="quicklink-wrapper">
              <ul className="quicklink-list">
                <li>
                  <a href="#" className="quicklink-link">
                    Faq
                  </a>
                </li>

                <li>
                  <a href="#" className="quicklink-link">
                    Help center
                  </a>
                </li>

                <li>
                  <a href="#" className="quicklink-link">
                    Terms of use
                  </a>
                </li>

                <li>
                  <a href="#" className="quicklink-link">
                    Privacy
                  </a>
                </li>
              </ul>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container_">
            <p className="copyright">
              &copy; 2023 <a href="#">Mood</a>. All Rights Reserved designe by Ing. <a href="#">Marceille</a>
            </p>

            <img
              src={card}
              alt=""
              className="footer-bottom-img"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;