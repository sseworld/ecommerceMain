import "./App.css";
import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Route, Routes, Navigate, redirect } from "react-router-dom";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import WebFont from "webfontloader";
import store from "./store";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRoute from "./components/Route/ProtectedRoute";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products";
import Search from "./components/Product/Search";
import LoginSignUp from "./components/User/LoginSignUp";
import UserOptions from "./components/layout/Header/UserOptions";
import Profile from "./components/User/Profile";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment";
import OrderSuccess from "./components/Cart/OrderSuccess";
import MyOrders from "./components/Order/MyOrder";
import OrderDetails from "./components/Order/OrderDetails";
import Dashboard from "./components/Admin/Dashboard";
import ProductList from "./components/Admin/ProductList";
import NewProduct from "./components/Admin/NewProduct";
import UpdateProduct from "./components/Admin/UpdateProduct";
import OrderList from "./components/Admin/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder";
import UsersList from "./components/Admin/UsersList";
import UpdateUser from "./components/Admin/UpdateUser";
import ProductReviews from "./components/Admin/ProductReviews";
import Contact from "./components/layout/Contact/Contact";
import About from "./components/layout/About/About";
import NotFound from "./components/layout/Not_Found/NotFound";

function App() {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    // <>
    //   <Header />
    //   {isAuthenticated && <UserOptions user={user} />}
    //   {/* {stripeApiKey && (
    //     <Elements stripe={loadStripe(stripeApiKey)}>
    //       <ProtectedRoute exact path="/process/payment" components={Payment} />
    //     </Elements>
    //   )} */}

    //   <Routes>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/product/:id" component={ProductDetails} />
    //     <Route exact path="/products" component={Products} />
    //     <Route path="/products/:keyword" component={Products} />
    //     <Route exact path="/search" component={Search} />
    //     <Route exact path="/contact" component={Contact} />
    //     <Route exact path="/about" component={About} />

    //     {/* <ProtectedRoute exact path="/account" component={Profile} />
    //     <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
    //     <ProtectedRoute
    //       exact
    //       path="/password/update"
    //       component={UpdatePassword}
    //     /> */}
    //     <Route exact path="/password/forgot" component={ForgotPassword} />
    //     <Route exact path="/password/reset/:token" component={ResetPassword} />
    //     <Route exact path="/login" component={LoginSignUp} />
    //     <Route exact path="/cart" component={Cart} />

    //     {/* <ProtectedRoute exact path="/shipping" component={Shipping} />
    //     <ProtectedRoute exact path="/success" component={OrderSuccess} />
    //     <ProtectedRoute exact path="/orders" component={MyOrders} />
    //     <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
    //     <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
    //     <ProtectedRoute
    //       isAdmin={true}
    //       exact
    //       path="/admin/dashboard"
    //       component={Dashboard}
    //     />
    //     <ProtectedRoute
    //       exact
    //       path="/admin/products"
    //       isAdmin={true}
    //       component={ProductList}
    //     />
    //     <ProtectedRoute
    //       exact
    //       path="/admin/product"
    //       isAdmin={true}
    //       component={NewProduct}
    //     />
    //     <ProtectedRoute
    //       exact
    //       path="/admin/product/:id"
    //       isAdmin={true}
    //       component={UpdateProduct}
    //     />
    //     <ProtectedRoute
    //       exact
    //       path="/admin/orders"
    //       isAdmin={true}
    //       component={OrderList}
    //     />
    //     <ProtectedRoute
    //       exact
    //       path="/admin/order/:id"
    //       isAdmin={true}
    //       component={ProcessOrder}
    //     />
    //     <ProtectedRoute
    //       exact
    //       path="/admin/users"
    //       isAdmin={true}
    //       component={UsersList}
    //     />
    //     <ProtectedRoute
    //       exact
    //       path="/admin/user/:id"
    //       isAdmin={true}
    //       component={UpdateUser}
    //     />
    //     <ProtectedRoute
    //       exact
    //       path="/admin/reviews"
    //       isAdmin={true}
    //       component={ProductReviews}
    //     /> */}

    //     <Route
    //       component={
    //         window.location.pathname === "/process/payment" ? null : NotFound
    //       }
    //     />
    //   </Routes>

    //   <Footer />
    // </>
    <>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          {<Route exact path="/process/payment" element={<Payment />} />}
        </Elements>
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/account" element={<Profile />} />

        {loading === false && (
          <>
            {isAuthenticated === true ? (
              <>
                <Route exact path="/account" element={<Profile />} />
                <Route exact path="/me/update" element={<UpdateProfile />} />
                <Route
                  exact
                  path="/password/update"
                  element={<UpdatePassword />}
                />
                <Route exact path="/shipping" element={<Shipping />} />
                <Route exact path="/success" element={<OrderSuccess />} />
                <Route exact path="/orders" element={<MyOrders />} />
                <Route exact path="/order/confirm" element={<ConfirmOrder />} />
                <Route exact path="/order/:id" element={<OrderDetails />} />
              </>
            ) : (
              redirect("/login")
            )}

            {user && user.role === "admin" ? (
              <>
                <Route exact path="/admin/dashboard" element={<Dashboard />} />
                <Route exact path="/admin/products" element={<ProductList />} />
                <Route exact path="/admin/product" element={<NewProduct />} />
                <Route
                  exact
                  path="/admin/product/:id"
                  element={<UpdateProduct />}
                />
                <Route exact path="/admin/orders" element={<OrderList />} />
                <Route
                  exact
                  path="/admin/order/:id"
                  element={<ProcessOrder />}
                />
                <Route exact path="/admin/users" element={<UsersList />} />
                <Route exact path="/admin/user/:id" element={<UpdateUser />} />
                <Route
                  exact
                  path="/admin/reviews"
                  element={<ProductReviews />}
                />
              </>
            ) : (
              redirect("/login")
            )}
          </>
        )}

        <Route
          element={
            window.location.pathname === "/process/payment" ? null : (
              <NotFound />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
