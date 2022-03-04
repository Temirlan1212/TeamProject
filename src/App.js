import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer2/Footer2";
import LoaderPage from "./pages/LoaderPage";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [load, setLoad] = useState(false);

  return (
    <>
      {load ? (
        <BrowserRouter>
          <AuthContextProvider>
            <ProductContextProvider>
              <Navbar />
              <MainRoutes />
              {/* <Footer /> */}
              <Footer2 />
            </ProductContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
      ) : (
        <center>
          <LoaderPage />
          <Button
            onClick={() => setLoad(true)}
            variant="outlined"
            sx={{ position: "absolute", top: "400px", right: "520px" }}
          >
            click here, to go to the content
          </Button>
        </center>
      )}
    </>
  );
}

export default App;
