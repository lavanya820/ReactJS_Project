import React from 'react'
import Practice from './Practice.jsx'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
// import Navigations from './navigation/Navigations.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Advatages from './component/Advatages.jsx'
// import Advantages from '../component/Advatages.jsx'
import TechShop from './pages/Allproduct.jsx'
import AllProductsPage from './pages/Allproduct.jsx'
import Advantages from './component/Advantages.jsx'
import Navigations from './navigation/Navigations.jsx'
const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />

      <Header />
      {/* <Home/> */}
      <Navigations/>
      {/* <TechShop/> */}
      {/* <AllProductsPage/> */}
      <Advantages/>
      <Footer />
      {/* <Cart/> */}
    </div>
  )
}

export default App
