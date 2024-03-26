import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import AppLayout from "./pages/AppLayout";
import Impressum from "./pages/Impressum";
import Error from "./pages/Error";
import NoProducts from "./pages/NoProdukts";
import { IconContext } from "phosphor-react";
import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <MantineProvider>
        <IconContext.Provider
          value={{
            color: "grey",
            size: 32,
            weight: "bold",
            mirrored: false,
          }}
        >
          {" "}
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route index exact path="/JC-Website/" element={<Home />} />
              <Route path="/JC-Website/products" element={<Products />}></Route>
              <Route path="/JC-Website/about-us" element={<About />} />
              <Route path="/JC-Website/impressum" element={<Impressum />} />
              <Route path="/JC-Website/nothing" element={<NoProducts />} />
            </Route>
            {/* <Route path="/register" element={<Signup />} />
                <Route path="/login" element={<npmLogIn />} /> */}

            <Route path="*" element={<Error />} />
          </Routes>
        </IconContext.Provider>
      </MantineProvider>
    </>
  );
}

export default App;
