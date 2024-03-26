import Produkte from "../components/Produkte.jsx";
import { DATA } from "../products.js";
//const desktopImage = "/_DSC3239.JPG";

function Products() {
  // const isMobile = window.innerWidth <= 768; // Define your mobile breakpoint here

  return (
    <div className="flex justify-center h-[565px] ">
      {/*     <span className="flex opacity-70 h-[500px] justify-center my-auto ">
        {isMobile ? null : (
          <img className="rounded-md" src={desktopImage} alt="Desktop Image" />
        )}
      </span> */}
      <div className="justify-center flex gap-32 ">
        {DATA.map((produkt, i) => {
          return <Produkte key={i} data={produkt} />;
        })}
      </div>
      {/*<span className="opacity-70 h-[500px] flex justify-center my-auto">
        {isMobile ? null : (
          <img className="rounded-md" src={desktopImage} alt="Desktop Image" />
        )}
      </spana>*/}
    </div>
  );
}

export default Products;
