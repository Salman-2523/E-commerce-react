import { Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import PrivateRoute from "./PrivateRoute";
import ProductsPage from "./ProductsPage";
import SingleProductPage from "./SingleProductPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoutes;
