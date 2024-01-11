import { useEffect, useState } from "react";
import Categorie_all from "./assets/component/categorie/categorie";
import Categorie from "./assets/component/home/categorie";
import Discount from "./assets/component/home/discounte";
import Footer from "./assets/component/home/footer";
import Header from "./assets/component/home/header";
import Most_buy from "./assets/component/home/most_buy";
import News from "./assets/component/home/new";
import News_Later from "./assets/component/home/new-later";
import Popular from "./assets/component/home/popular";
import Produit from "./assets/component/home/produit";
import Nav from "./assets/component/nav/nav";
import { useLocation } from "react-router-dom";
import Dashbord from "./assets/component/dashbord";
function App() {
  const locatio = useLocation();
  const path = locatio.pathname;
  const [lien, setLien] = useState();

  // alert(path)
  const location = () => {
    if (path == "/") {
      return (
        <>
          {/* <Categorie />
          <Discount />
          <Popular />
          <Produit title={"Most Popular"} />
          <Discount />
          <Produit title={"Most Popular"} /> */}

          {/* <Produit title={"Most rates"} />
           <News/> 
          <Most_buy />
          <News_Later /> */}
        </>
      );
    } else if (path == "/Categorie") {
      return (
        <>
          <Categorie_all />
        </>
      );
    }

   
  };
  return (
    <>
      <Nav />
      <Header />
      <div id="main">{location()}</div>
      <Footer />
      <Nav />
    </>
  );
}

export default App;
