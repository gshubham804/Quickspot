import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/layouts/mainLayout";
import { Home, Page404, ProductDetails } from "./Components/pages";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Login from "./Components/pages/Login";
import Signup from "./Components/pages/Signup";
import Services from "./Components/pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="aboutus" element={<About />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </Router>
  );
}

export default App;
