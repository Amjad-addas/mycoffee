import { Feed } from './componants/Feed';
import './App.css';
import Navbar from './componants/Navbar'
import {BrowserRouter , Routes, Route}  from "react-router-dom";
import { Box } from '@mui/material';
import  Coffee  from './componants/Coffee';
import About from './componants/About';

import ProductDetail from './componants/ProductDetail';
import Products from './componants/Products';
import SignIn from './componants/SignIn';
import SignUp from './componants/SignUp';
import Profile from './componants/Profile';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>

   <Box>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/coffee" element={<Coffee/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product-detail" element={<ProductDetail/>} />
          <Route path="/all-products" element={<Products/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
  </Box>

    </BrowserRouter>
       
        
   
  );
}
export default App;
