
import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ProductCreate from "./Pages/ProductCreate";

import { StoreData } from "./Store/authSlice";
import { storeProducts } from "./Store/productSlice";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      if (location.pathname === "/signup" || location.pathname === "/login") {
        navigate("/");
      }
    } else {
      if (location.pathname !== "/signup" && location.pathname !== "/login") {
        navigate("/login");
      }
    }
  }, [location.pathname, isLoggedIn, navigate]);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedLoginState = localStorage.getItem("isLoggedIn");

    if (storedUser && storedLoginState) {
      const parsedUser = JSON.parse(storedUser);
      const parsedLoginState = JSON.parse(storedLoginState);
      dispatch(StoreData({ user: parsedUser, isLoggedIn: parsedLoginState }));
    }
  }, [dispatch]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      dispatch(storeProducts(parsedProducts));
    }
  }, [dispatch]);

  const isAuthPage = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <div className="h-max bg-slate-300 flex-wrap">
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product-create" element={<ProductCreate />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;





























































































































































































































































































































































































// import React, { useEffect } from "react";
// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import Signup from "./Pages/Signup";
// import Login from './Pages/Login';
// import Home from "./Pages/Home";
// import Header from "./Component/Header";
// import { useDispatch, useSelector } from "react-redux";
// import { StoreData } from "./Store./authSlice";
// import { storeProducts } from "./Store/productSlice";
// import ProductCreate from "./Pages/ProductCreate";

// function App() {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     if (isLoggedIn && (location.pathname === "/signup" || location.pathname === "/login")) {
//       navigate("/");
//     } else if (!isLoggedIn && (location.pathname !== "/signup" && location.pathname !== "/login")) {
//       navigate("/login");
//     }
//   }, [location.pathname, isLoggedIn, navigate]);

//   const shouldShowHeader = ['/signup', '/login'].includes(location.pathname);

//   useEffect(() => {
//     const storedUser = getStoredData('user');
//     const storedLoginState = getStoredData('isLoggedIn');

//     if (storedUser && storedLoginState) {
//       dispatch(StoreData({ user: storedUser, isLoggedIn: storedLoginState }));
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     const storedProducts = getStoredData("products");
//     if (storedProducts) {
//       dispatch(storeProducts(storedProducts));
//     }
//   }, [dispatch]);

//   return (
//     <div className="h-screen bg-slate-300">
//       {!shouldShowHeader && <Header />}
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/product-create' element={<ProductCreate />} />
//       </Routes>
//     </div>
//   );
// }

// const getStoredData = (key) => {
//   const item = localStorage.getItem(key);
//   return item ? JSON.parse(item) : null;
// };

// export default App;







// import React, { useEffect } from "react";
// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import Signup from "./Pages/Signup";
// import Login from './Pages/Login';
// import Home from "./Pages/Home";
// import Header from "./Component/Header";
// import {  useDispatch, useSelector } from "react-redux";
// import { StoreData } from "./Store/authSlice";
// import { storeProducts } from "./Store/productSlice";
// import ProductCreate from "./Pages/ProductCreate";
// import Footer from "./Component/Footer";
// // import { Provider } from "react-redux";

// import Store  from  "./Store/store";
// function App() {

//   const location = useLocation();
//    const navigate = useNavigate();
  
  
//    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//    const dispatch = useDispatch();
  
//   useEffect(() => {
//      if (isLoggedIn) {
//       if (location.pathname === "/signup" || location.pathname === "/login") {
//          navigate("/")
//       }
    
//     } else {
//        if (location.pathname !== "/signup" && location.pathname !== "/login") {
//         navigate("/login")
//       }
//      }
//    }, [location.pathname]);
  
//   const isShowHeader = location.pathname === "/signup" || location.pathname === "/login";
//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     const storedLoginstate = localStorage.getItem('isLoggedIn');

//     if (storedUser && storedLoginstate) {
//       const parsedUser = JSON.parse(storedUser);
//       const parsedLoginState = JSON.parse(storedLoginstate)
//       dispatch(StoreData({ user: parsedUser, isLoggedIn: parsedLoginState }));
//     }
//   }, [dispatch]);
//   useEffect(() => {
//     const storedProducts = localStorage.getItem("products")
//     if(storedProducts) {
//     const parsedProducts = JSON.parse(storedProducts);
//     dispatch(storeProducts(parsedProducts));
//     }
//   }, [dispatch]);
//   return (
//   //  <Provider Store={Store}>
//     <div className="h-max bg-slate-300 flex-wrap">
//       {
//         isShowHeader ? <></> :
//            <Header />
        
//       }
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/product-create' element={<ProductCreate />} />
//         <Footer/>
//       </Routes>
      
//     </div>
//     //  </Provider> 
//   )
// }

// export default App;

