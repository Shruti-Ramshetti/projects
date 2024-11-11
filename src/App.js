import logo from './logo.svg';
import './App.css';
import Footer from './components/layouts/TechShop/Footer';
import Header from './components/layouts/TechShop/Header';
import ProductSlider from './components/layouts/TechShop/Slide';
import React, { useState } from 'react';
import Advantages from './components/layouts/TechShop/Advantages';
import FeaturedProducts from './components/layouts/TechShop/FeaturedProducts';
import TopProducts from './components/layouts/TechShop/TopProducts';
import ProductDetail from './components/layouts/TechShop/ProductDetail';


// import ProductDetails from './components/layouts/Ass2/ProductDetails';
// import ProductCard from './components/layouts/Ass2/ProductCard';
// import ProductCard1 from './components/layouts/Ass3/ProductCard1';
// import Navbar from './components/layouts/Ass4/navbar';

// import HeaderComp from './components/layouts/Assignment/HeaderComp';
// import FooterComp from './components/layouts/Assignment/FooterComp';
// import ProductList from './components/layouts/Pages/ProductList';
// import TodoApp from './components/layouts/Cart/TodoApp';
// import ImageGallery from './components/layouts/Cart/ImageGallery';

// import Navbar from './components/layouts/Cart/navbar';
// import { BrowserRouter,Router, Routes, Route } from "react-router-dom";
// import HomePage from './components/layouts/Ass4/HomePage';
// import Home from './components/layouts/Ass4/Home';
// import SingleProductPage from './components/layouts/Ass4/SingleProductPage';
// import ProductCatalogPage from './components/layouts/Ass4/ProductCatalogPage';
// import AboutUsPage from './components/layouts/Ass4/AboutUsPage';
// import ContactUsPage from './components/layouts/Ass4/ContactUsPage';
// import HomePage from './components/layouts/Ass5/HomePage';
// import ProductCatalogPage from './components/layouts/Ass5/ProductCatalogPage';
// import SingleProductPage from './components/layouts/Ass5/SingleProductPage';
// import AboutUsPage from './components/layouts/Ass5/AboutUsPage';
// import ContactUsPage from './components/layouts/Ass5/ContactUsPage';
// import ProductCatalogPage from './components/layouts/Ass4/ProductCatalogPage';
// import Home from './components/layouts/Pages/Home';
// import HomePage from './components/layouts/Assignment/HomePage';
// import AboutPage from './components/layouts/Assignment/AboutPage';
// import ServicesPage from './components/layouts/Assignment/ServicesPage';
// import PortfolioPage from './components/layouts/Assignment/PortfolioPage';
// import TeamPage from './components/layouts/Assignment/TeamPage';
// import DropdownPage from './components/layouts/Assignment/DropdownPage';
// import ContactPage from './components/layouts/Assignment/ContactPage';
// // import Home from './components/layouts/Pages/Home';
// import Fashion from './components/layouts/Pages/Fashion';
// import Electronics from './components/layouts/Pages/Electronics';
// import Accessories from './components/layouts/Pages/Accessories';
// import Footercomponent from './components/layouts/Cart/footer';
// import ProductListingpage from './components/layouts/Pages/Productlistingpage';
// import CartPage from './components/layouts/Pages/cart';
// import Userslist from './components/layouts/Cart/usestate';
// import React, { useState, useEffect } from 'react';

function App(){
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };
  return (
    <div className='App'>
      <div>
      
      <Header/>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
      ) : (
        <ProductSlider onProductSelect={handleProductSelect} />
      )}
    <FeaturedProducts/>
    <TopProducts/>
     <Advantages/>
     
        <Footer/>
       
      {/* <Navbar/>
      <Routes> */}
      {/* <Route exact path="/" component={HomePage} />
            <Route exact path="/catalog" component={ProductCatalogPage} />
            <Route path="/product/:id" component={SingleProductPage} />
            <Route path="/about" component={AboutUsPage} />
            <Route path="/contact" component={ContactUsPage} /> */}
        {/* <Route path="/" element={<Home/>}/>
          <Route exact path="/catalog" component={ProductCatalogPage} />
          <Route path="/product/:id" component={SingleProductPage} />
          <Route path="/about" component={AboutUsPage} />
          <Route path="/contact" component={ContactUsPage} /> */}
        {/* <Route path="/Electronics" element={<Electronics/>}/>
        <Route path="/Fashion" element={<Fashion/>}/>
        <Route path="/Accessories" element={<Accessories/>}/> */}
      {/* </Routes> */}
        {/* <h1>ProductCard with the JSON data provided</h1>
   <ProductCard1/> */}
      {/* <h1>Product Details</h1>
      <ProductDetails/>

      <h1>Product List</h1>
      <ProductCard/> */}
    </div>
     {/* <HeaderComp />
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/dropdown" element={<DropdownPage />} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <FooterComp/> */}


       {/* <Navbar/>
       <Userslist/>
       */}
      {/* <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Electronics" element={<Electronics/>}/>
        <Route path="/Fashion" element={<Fashion/>}/>
        <Route path="/Accessories" element={<Accessories/>}/>
      </Routes> */}
      {/* <Footercomponent/> */}
      {/* <ImageGallery/> */}
      {/* <TodoApp/> */}
      {/* <ProductList/> */}
      {/* <Navbar/>
      <Routes>
        <Route path="/ProductListingpage"  addToCart={addToCart}  element={<ProductListingpage/>}/>
        <Route path="/cart" cart={cart}  element={<CartPage/>}/>
   
      </Routes>
      <Footercomponent/> */}
      
    </div>

    );

  }


export default App;
