import React from "react";
import Navbar from "../../common/Navbar";
import Sidebar from "../../common/Sidebar";
import AllProductsView from "../../common/AllProductsView";
import MainStyle from "../../../../css/dashboard/Main.module.css";
import ProductStyle from "../../../../css/dashboard/Products.module.css";
import ProductUpdateForm from "./common/ProductUpdateForm";

function ProductUpdate() {
  return (
    <div className={MainStyle.bodycontainer}>
      <div className={MainStyle.navSection}>
        <Navbar />
      </div>
      {/* Body */}
      <div className={MainStyle.bodySection}>
        {/* Sidebar */}
        <div className={MainStyle.sidebarSection}>
          <Sidebar />
        </div>
        <div className={ProductStyle.cardDataSection}>
          <div className={ProductStyle.detailsSection}>
            <div className={ProductStyle.detailCard}>
              {/* Product Add Form Part */}
              <ProductUpdateForm />
            </div>
          </div>
          <div className={ProductStyle.productsViewSection}>
            <AllProductsView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductUpdate;
