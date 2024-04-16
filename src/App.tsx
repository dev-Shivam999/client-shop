import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Sign from "./page/Sign";
;
const Home = lazy(() =>import("./page/Home"))
const Fav = lazy(() =>import("./page/Fav"))
const Cart = lazy(() =>import("./page/Cart"))

const App = () => {
  return (
    <div>
      <div className="bg-pink-500 text-white p-5 text-center text-3xl mb-6">
       GORI Shop To Home
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading...."}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/fav"
          element={
            <Suspense fallback={"loading...."}>
              <Fav />
            </Suspense>
          }
        />
        <Route
          path="/Cart"
          element={
            <Suspense fallback={"loading...."}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/Login"
          element={
            <Suspense fallback={"loading...."}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/Sign"
          element={
            <Suspense fallback={"loading...."}>
              <Sign />
            </Suspense>
          }
        />
       
      </Routes>
    </div>
  );
};

export default App;
