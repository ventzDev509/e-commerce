import "./nav.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {


  return (
    <>

     <div id="nav">
         
    <div className="bottom-nav">
        <div className="bottom-inner">
            <div className="bottom-main">
                <div className="nav-items">
                    <div className="nav-item">
                        <span className="las la-home"></span>
                        <p>Home</p>
                    </div>
                    <div className="nav-item">
                        <span className="las la-shopping-bag"></span>
                        <p>Order</p>
                    </div>
                </div>
                <div className="nav-item-main">
                    <div>
                        <span className="las la-shopping-cart"></span>
                    </div>
                </div>
                <div className="nav-items">
                    <div className="nav-item">
                        <span className="las la-gift"></span>
                        <p>Offer</p>
                    </div>
                    <div className="nav-item">
                        <span className="las la-ellipsis-h"></span>
                        <p>More</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </div>
    </>
  );
}

export default Nav;