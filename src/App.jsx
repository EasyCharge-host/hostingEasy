// import { useLocation } from "react-router-dom";
// import Header from "./components/Header";
import About from "./pages/About";
import Supporter from "./pages/Supporter";
import Products from "./pages/Products";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/cart/cart";
import { IconContext } from "phosphor-react";
import { ShopContextProvider } from "./context/ShopContext";
import Signup from "./pages/Signup";
import LogIn from "./pages/LogIn";
import { FirebaseContext } from "./context/FirebaseContext";
import { MantineProvider } from "@mantine/core";
import { Col, Container, Row } from "react-bootstrap";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {" "}
            <MantineProvider>
              <ShopContextProvider>
                <IconContext.Provider
                  value={{
                    color: "grey",
                    size: 32,
                    weight: "bold",
                    mirrored: false,
                  }}
                >
                  <FirebaseContext>
                    <Navbar />
                    <Routes>
                      <Route
                        exact
                        path="/JC-Website"
                        element={
                          <ProtectedRoute>
                            <Home />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/JC-Website/supporter"
                        element={<Supporter />}
                      />
                      <Route path="/JC-Website/cart" element={<Cart />} />
                      <Route
                        path="/JC-Website/products"
                        element={<Products />}
                      ></Route>
                      <Route path="/JC-Website/about-us" element={<About />} />
                      <Route path="/JC-Website/register" element={<Signup />} />
                      <Route path="/JC-Website/login" element={<LogIn />} />
                    </Routes>
                    <Footer />{" "}
                  </FirebaseContext>{" "}
                </IconContext.Provider>
              </ShopContextProvider>
            </MantineProvider>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
