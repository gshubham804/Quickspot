import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/layouts/mainLayout";
import { Home, Page404, ProductDetails } from "./Components/pages";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Login from "./Components/pages/Login";
import Signup from "./Components/pages/Signup";
import Services from "./Components/pages/Services";
import Booking from "./Components/pages/Booking";
import ProductDataForm from "./Components/pages/ProductDataForm";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Components/redux/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="productdetails">
                <Route index element={<ProductDetails />} />
                <Route path="booking" element={<Booking />} />
              </Route>
              <Route path="aboutus" element={<About />} />
              <Route path="contactus" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="services" element={<Services />} />
              <Route path="productdataform" element={<ProductDataForm />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
