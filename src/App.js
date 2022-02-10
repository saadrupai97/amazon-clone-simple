import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="//order-review" element={<Review />} />
          <Route path="/manage-inventory" element={<Inventory />} />
          <Route path="/product/:productKey" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
     
    </div >
  );
}

export default App;
