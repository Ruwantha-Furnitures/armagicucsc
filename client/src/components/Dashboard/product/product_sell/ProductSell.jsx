import React from "react";
import Navbar from "../../common/Navbar";
import Sidebar from "../../common/Sidebar";
import AllProductsView from "../../common/AllProductsView";
import MainStyle from "../../../../css/dashboard/Main.module.css";
import ProductStyle from "../../../../css/dashboard/Products.module.css";
import ProductSellProductForm from "./common/ProductSellProductForm";

function ProductSell() {
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
              {/* Product Sell Form Customer Part */}
              <ProductSellProductForm />
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

export default ProductSell;
