import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <ProductContextProvider>
            <Navbar />
            <MainRoutes />
            <Footer />
          </ProductContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
