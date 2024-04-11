import { MenClothes } from "../common/MenClothes";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";

const MenProducts = () => {
  return (
    <div className="men__section">
      <div className="navbar__shadow color-black">
        <Header />
      </div>
      <div className="main__section container">
        <div className="men__products">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="products">
            <MenClothes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenProducts;
