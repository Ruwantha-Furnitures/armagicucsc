import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Dashboard Components
import Dashboard from "./components/Dashboard/DashboardHome";
import ProfileChangePassword from "./components/Dashboard/profile/ProfileChangePassword";
import DashboardDriver from "./components/Dashboard/DashboardDriver";

// products
// categories
import ProductCategoryAdd from "./components/Dashboard/product/product_categories/ProductCategoryAdd";
import ProductCategoryUpdate from "./components/Dashboard/product/product_categories/ProductCategoryUpdate";
import ProductCategoryView from "./components/Dashboard/product/product_categories/ProductCategoryView";
// Types
import ProductTypeView from "./components/Dashboard/product/product_types/ProductTypeView";
import ProductTypeAdd from "./components/Dashboard/product/product_types/ProductTypeAdd";
import ProductTypeUpdate from "./components/Dashboard/product/product_types/ProductTypeUpdate";

// product
import Products from "./components/Dashboard/product/products/Products";
import ProductAdd from "./components/Dashboard/product/products/ProductAdd";
import ProductUpdate from "./components/Dashboard/product/products/ProductUpdate";
import ProductView from "./components/Dashboard/product/products/ProductView";

// product Sell
import ProductSell from "./components/Dashboard/product/product_sell/ProductSell";
import ProductSellAmount from "./components/Dashboard/product/product_sell/ProductSellAmount";
import ProductSellCustomer from "./components/Dashboard/product/product_sell/ProductSellCustomer";

// customer
import CustomerMessages from "./components/Dashboard/customer/CustomerMessages";
import CustomerMessageView from "./components/Dashboard/customer/CustomerMessageView";
import CustomerProfile from "./components/Dashboard/customer/CustomerProfile";
import ProductReviews from "./components/Dashboard/customer/ProductReviews";

// deliveryDriver
import DeliveryDrivers from "./components/Dashboard/deliveryDriver/DeliveryDrivers";
import DeliveryDriverProfile from "./components/Dashboard/deliveryDriver/DeliveryDriverProfile";
import DeliveryDriverDeliveries from "./components/Dashboard/deliveryDriver/DeliveryDriverDeliveries";
import DeliveryDriverAvalability from "./components/Dashboard/deliveryDriver/DeliveryDriverAvalability";
import DeliveryDriverView from "./components/Dashboard/deliveryDriver/DeliveryDriverView";
import DeliveryDriverUpdate from "./components/Dashboard/deliveryDriver/DeliveryDriverUpdate";
import DeliveryDriverNotifications from "./components/Dashboard/deliveryDriver/DeliveryDriverNotifications";
import AssignOrderDriver from "./components/Dashboard/deliveryDriver/AssignOrderDriver";
import AssignDriver from "./components/Dashboard/deliveryDriver/AssignDriver";

// orders
import CompletedOrders from "./components/Dashboard/order/CompletedOrders";
import OrderDetails from "./components/Dashboard/order/OrderDetails";
import PurchaseOrders from "./components/Dashboard/order/PurchaseOrders";
// import test from "./components/Dashboard/test/test";

// End of Dashboard components

// Web Component
import Home from "./components/web/customer/Home/Home.jsx";
import Product from "./components/web/customer/Products/Product.jsx";
import ContactUs from "./components/web/customer/ContactUs/Contact.jsx";
import Login from "../src/components/web/Common/Login.jsx";
import Signup from "./components/web/customer/SignUp/Signup.jsx";

import Customer_Home from "./components/web/registeredCustomer/Home/CustomerHome";
import Customer_Product from "./components/web/registeredCustomer/Product/CustomerProduct.jsx";
import Customer_ContactUs from "./components/web/registeredCustomer/ContactUs/CustomerContact.jsx";
import ViewProfile from "./components/web/registeredCustomer/Profile/ViewProfile.jsx";
import Customer_Cart from "./components/web/registeredCustomer/Cart/CartTable.jsx";

import View_Product from "./components/web/customer/Products/ViewProductDetails.jsx";
import View_Product_Details from "./components/web/registeredCustomer/Product/CustomerViewProductDetails";
import CustomerUpdateProfile from "./components/web/registeredCustomer/Profile/UpdateProfile.jsx";
import CustomerChangePassword from "./components/web/registeredCustomer/Profile/CustomerChangePassword.jsx";
// import RecoveryPassword from "./components/web/registeredCustomer/PasswordRecovery/PasswordRecovery.jsx";
import CustomerPayment from "./components/web/registeredCustomer/Payment/PaymentForm.jsx";
import CustomerCheckout from "./components/web/registeredCustomer/BeforePayment/ShippingDetailsPage.jsx";
import CustomerReviews from "./components/web/registeredCustomer/Reviews/CustomerReviewsPage.jsx";
import CustomerAddReview from "./components/web/registeredCustomer/Reviews/AddReview.jsx";
import CustomerThankYou from "./components/web/registeredCustomer/Payment/ThankYouPage.jsx";
import PendingEmail from "./components/web/registeredCustomer/PasswordRecovery/Pending.jsx";
import ForgotPasswordChangePassword from "./components/web/registeredCustomer/PasswordRecovery/ChangePassword.jsx";
// import PayhereCheckout from "./components/web/registeredCustomer/Payment/Checkout.jsx";
// import PaymentForm from "./components/web/registeredCustomer/Payment/PaymentForm.jsx";
import CustomerChekoutFromViewProduct from "./components/web/registeredCustomer/Product/CustomerCheckout.jsx";
import CustomerPaymentFromViewProduct from "./components/web/registeredCustomer/Product/CustomerPayment.jsx";
import CustomerDeleteProfile from "./components/web/registeredCustomer/Profile/CustomerDeleteProfile.jsx";

import ForgotPassword from "./components/web/registeredCustomer/PasswordRecovery/ForgetPassword";
import PendingOrder from "./components/Dashboard/order/PendingOrder";
import TrackingOrders from "./components/Dashboard/order/TrackingOrders";
import ProductSellShipping from "./components/Dashboard/product/product_sell/ProductSellShipping";
import Report from "./components/Dashboard/report/Report";
import ReportView from "./components/Dashboard/report/ReportView";
import AnnualOrderReport from "./components/Dashboard/report/AnnualOrderReport";
import TopCustomersReport from "./components/Dashboard/report/TopCustomersReport";
import TopProductsReport from "./components/Dashboard/report/TopProductsReport";
import TopDriversReport from "./components/Dashboard/report/TopDriversReport";
import DriverAssignPending from "./components/Dashboard/deliveryDriver/DriverAssignPending";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Dashboard */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboardDriver" component={DashboardDriver} />
          {/* Dashboard-Product */}
          <Route exact path="/dashboard/products" component={Products} />
          <Route
            exact
            path="/dashboard/product/view/:id"
            component={ProductView}
          />
          <Route exact path="/dashboard/product/add" component={ProductAdd} />
          <Route
            exact
            path="/dashboard/product/update/:id"
            component={ProductUpdate}
          />
          <Route
            exact
            path="/dashboard/product/sell/amount/:id"
            component={ProductSellAmount}
          />
          <Route
            exact
            path="/dashboard/product/sell/product/:id"
            component={ProductSell}
          />
          <Route
            exact
            path="/dashboard/product/sell/shipping/:id"
            component={ProductSellShipping}
          />
          <Route
            exact
            path="/dashboard/product/sell/customer"
            component={ProductSellCustomer}
          />
          <Route
            exact
            path="/dashboard/product/addProductType"
            component={ProductTypeAdd}
          />

          <Route
            exact
            path="/dashboard/product/viewProductType/:id"
            component={ProductTypeView}
          />
          <Route
            exact
            path="/dashboard/product/updateProductType/:id"
            component={ProductTypeUpdate}
          />

          <Route
            exact
            path="/dashboard/product/addProductCategory"
            component={ProductCategoryAdd}
          />

          <Route
            exact
            path="/dashboard/product/viewProductCategory/:id"
            component={ProductCategoryView}
          />
          <Route
            exact
            path="/dashboard/product/updateProductCategory/:id"
            component={ProductCategoryUpdate}
          />

          <Route
            exact
            path="/dashboard/purchaseOrders"
            component={PurchaseOrders}
          />

          <Route
            exact
            path="/dashboard/trackingOrders"
            component={TrackingOrders}
          />

          {/* For Navigations Purpose */}
          <Route
            exact
            path="/dashboard/purchaseOrder/details/:id"
            component={OrderDetails}
          />
          <Route
            exact
            path="/dashboard/completedOrder/details/:id"
            component={OrderDetails}
          />
          <Route
            exact
            path="/dashboard/assignOrder/details/:id"
            component={OrderDetails}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/details/:id"
            component={OrderDetails}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/details/:id"
            component={OrderDetails}
          />
          <Route
            exact
            path="/dashboard/trackingOrder/details/:id"
            component={OrderDetails}
          />
          <Route
            exact
            path="/dashboard/pendingOrder/details/:id"
            component={OrderDetails}
          />
          {/* End Navigations Purpose */}

          <Route
            exact
            path="/dashboard/completedOrders"
            component={CompletedOrders}
          />
          <Route
            exact
            path="/dashboard/assignListOrderDriver"
            component={AssignOrderDriver}
          />
          <Route
            exact
            path="/dashboard/pendingListOrderDriver"
            component={PendingOrder}
          />
          <Route
            exact
            path="/dashboard/assignDriver/:id"
            component={AssignDriver}
          />

          {/* Dashboard-Profiles Section*/}
          <Route
            exact
            path="/dashboard/profile/changePassword"
            component={ProfileChangePassword}
          />

          {/* Dashboard-Customer Section */}
          <Route exact path="/dashboard/reviews" component={ProductReviews} />
          <Route
            exact
            path="/dashboard/customerMessages"
            component={CustomerMessages}
          />
          <Route
            exact
            path="/dashboard/customerMessage/view/:id"
            component={CustomerMessageView}
          />

          <Route
            exact
            path="/dashboard/customer/detials/:id"
            component={CustomerProfile}
          />

          {/* Dashboard-Dilvery Drivers Section*/}
          <Route
            exact
            path="/dashboard/deliveryDrivers"
            component={DeliveryDrivers}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/view/:id"
            component={DeliveryDriverView}
          />
          <Route
            exact
            path="/dashboard/deliveryDriverNotCompleted/view/:id"
            component={DeliveryDriverView}
          />
          <Route
            exact
            path="/dashboard/deliveryDriverPending/:id"
            component={DriverAssignPending}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/viewOnly/:id"
            component={DeliveryDriverView}
          />
          <Route
            exact
            path="/dashboard/deliveryDriverProfile"
            component={DeliveryDriverView}
          />

          <Route
            exact
            path="/dashboard/deliveryDriver/update/:id"
            component={DeliveryDriverUpdate}
          />
          <Route
            exact
            path="/dashboard/deliveryDriverProfile/update/:id"
            component={DeliveryDriverUpdate}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/profile"
            component={DeliveryDriverProfile}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/deliveries"
            component={DeliveryDriverDeliveries}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/notifications"
            component={DeliveryDriverNotifications}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/availablity"
            component={DeliveryDriverAvalability}
          />
          <Route
            exact
            path="/dashboard/annualOrderReport/:year"
            component={AnnualOrderReport}
          />
          <Route
            exact
            path="/dashboard/topCustomersReport/:year"
            component={TopCustomersReport}
          />
          <Route
            exact
            path="/dashboard/topProductsReport/:year"
            component={TopProductsReport}
          />
          <Route
            exact
            path="/dashboard/topDriversReport/:year"
            component={TopDriversReport}
          />
          <Route exact path="/dashboard/reportView" component={ReportView} />

          {/* Web */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/customer_home" component={Customer_Home} />
          <Route exact path="/customer_product" component={Customer_Product} />
          <Route
            exact
            path="/customer_contact-us"
            component={Customer_ContactUs}
          />
          <Route exact path="/viewProfile" component={ViewProfile} />
          <Route exact path="/cart" component={Customer_Cart} />

          <Route exact path="/viewProductPage" component={Customer_Product} />
          <Route exact path="/viewProduct" component={View_Product} />
          <Route
            exact
            path="/viewProductDetail"
            component={View_Product_Details}
          />
          <Route
            exact
            path="/changepassword"
            component={CustomerChangePassword}
          />

          <Route
            exact
            path="/updateProfile"
            component={CustomerUpdateProfile}
          />
          {/* <Route exact path="/recoveryPassword" component={RecoveryPassword} /> */}
          <Route exact path="/PendingEmail" component={PendingEmail} />
          <Route
            exact
            path="/forgotPassword_changePassword"
            component={ForgotPasswordChangePassword}
          />
          <Route exact path="/forgotPassword" component={ForgotPassword} />

          <Route exact path="/customer_checkout" component={CustomerCheckout} />

          <Route exact path="/payment" component={CustomerPayment} />
          <Route exact path="/customer_reviews" component={CustomerReviews} />
          <Route
            exact
            path="/customer_add_reviews"
            component={CustomerAddReview}
          />
          <Route exact path="/customer_thankyou" component={CustomerThankYou} />
          {/* <Route
            exact
            path="/customer_paymentGateway"
            component={PayhereCheckout}
          /> */}
          <Route exact path="/paymentForm" component={CustomerPayment} />

          <Route
            exact
            path="/customer_productDetails_checkout"
            component={CustomerChekoutFromViewProduct}
          ></Route>
          <Route
            exact
            path="/customer_productDetails_payment"
            component={CustomerPaymentFromViewProduct}
          ></Route>
          <Route
            exact
            path="/customer_deleteProfile"
            component={CustomerDeleteProfile}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
