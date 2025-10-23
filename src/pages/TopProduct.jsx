
import React, { useContext, useState } from "react";
// import "./TopProduct.css";
import "./Topproduct.css"
import { globalContext } from "../myContext/MyContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk_store/productSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TopProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data } = useContext(globalContext);
  const dispatch = useDispatch();

  const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

  if (!data || data.length === 0) {
    return (
      <div className="text-center text-white p-3 bg-dark">
        Loading Top Products...
      </div>
    );
  }

  const filteredProducts = data.filter((product) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Headphones")
      return product.info?.toLowerCase().includes("headphone");
    if (activeCategory === "Earbuds")
      return product.info?.toLowerCase().includes("earbud");
    if (activeCategory === "Earphones")
      return product.info?.toLowerCase().includes("earphone");
    if (activeCategory === "Neckbands")
      return product.info?.toLowerCase().includes("neckband");
    return false;
  });

  const displayedProducts =
    activeCategory === "All"
      ? filteredProducts.slice(0, 11)
      : filteredProducts;

  // ✅ Add to Cart Handler with Toast
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="container-fluid bg-dark pb-5">
      <h3 className="text-center text-white p-4">Top Products</h3>

      {/* Category Buttons */}
   <div className="flex justify-center gap-6 flex-wrap my-6">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 
        ${activeCategory === category
          ? "bg-red-600 text-white shadow-lg scale-105"
          : " text-gray-300 hover:bg-red-500 hover:text-white hover:scale-105"
        }`}
    >
      {category}
    </button>
  ))}
</div>



      {/* Product Cards */}
      <div className="container">
        <div className="row justify-content-center gx-4 gy-4">
          {displayedProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="card h-100 bg-dark border border-white text-white">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body card_font_s">
                  <div className="pt-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-warning"></i>
                    ))}
                  </div>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.info}</p>
                  <hr />
                  <h4 className="product_font_head">
                    ₹{product.finalPrice}{" "}
                    <span className="text-muted">
                      <s className="font_mute_c">₹{product.originalPrice}</s>
                    </span>
                  </h4>

                  {/* ✅ Add to Cart Button */}
                  <button
                    type="button"
                    className="btn card_button_bottom w-100"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                    
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Extra Card */}
          {activeCategory === "All" && (
            <div className="col-lg-3 col-md-3 col-12 custom-col">
              <div className="card h-100 bg-dark border border-white d-flex align-items-center justify-content-center text-center">
                <div className="card-body card_font_s d-flex flex-column align-items-center justify-content-center">
                <Link to="/Allproduct" className="yyy"> <h2 className="card-title text-white ">
                    Browse all <br /> Product{" "}
                    <i className="fa-solid fa-arrow-right-long bgggg"></i>
                  </h2>
                  </Link> 
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default TopProducts;
