import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import HomePage from './landing_page/Home/HomePage';
import AboutPage from './landing_page/About/AboutPage';
import Login from './landing_page/Login/Login';
import Register from './landing_page/Register/Register';
import  {Toaster} from 'react-hot-toast';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import DailyProduct from "./landing_page/DailyProducts/DailyProducts";
import ProductInDetails from "./Components/ProductInDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Toaster />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/dailyProducts" element={<DailyProduct />} />
            <Route path="/product/:productId" element={<ProductInDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
