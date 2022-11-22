import { Footer } from "@components/footer";
import { Header } from "@components/header";
import CartPage from "@content-page/cart-page";
import MainLayout from "@content-page/main-layout";
import { GlobalStyle } from "@global-styles/global-styles";
import { CartProvider } from "@shared/contexts/cart-context";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <GlobalStyle />
      <main
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Header />
          <div style={{ padding: "2rem", marginTop: "10vh" }}>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </main>
    </CartProvider>
  );
}

export default App;
