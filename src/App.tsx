import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ProductPage } from "./components/ProductPage/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <ProductPage />
    </BrowserRouter>
  );
};

export default App;
