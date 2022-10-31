import { Header } from "@components/header";
import { GlobalStyle } from "@global-styles/global-styles";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
