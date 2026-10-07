
import './App.css'
import Header from "./components/Header";
import PageFooter from "./components/PageFooter";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import View from './pages/View';
import Wishlist from './pages/Wishlist';
import PageNotFound from './pages/PageNotFound';


function App() {


  return (
    <>
    <Header/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/view/:id' element={<View/>}/>
  <Route path='/wishlist' element={<Wishlist/>}/>
  <Route path='/*' element={<PageNotFound/>}/>
</Routes>
    
    <PageFooter/>
    </>
  )
}

export default App
