import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './components/Header/header';
import { useDispatch } from 'react-redux';
import { changeCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';
import Footer from 'components/Footer/footer';
import Headphones from 'pages/Headphones/headphones';
import ScrollToTop from 'components/ScrollToTop';
import IProduct from 'interfaces/product';
import productList from 'data/data.json';
import Speakers from 'pages/Speakers/speakers';
import Earphones from 'pages/Earphones/earphones';
import { ProductDetails } from 'pages/ProductDetails/product-details';
import Sidebar from 'components/Sidebar/sidebar';

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);

  const dispatch = useDispatch();

  function handleBreakpoints() {
    if(window.innerWidth >= 1200)
      dispatch(changeCurrentBreakpoint('desktop'));
    else if(window.innerWidth >= 768)
      dispatch(changeCurrentBreakpoint('tablet'));
    else
      dispatch(changeCurrentBreakpoint('mobile'));
  }
  
  useEffect(() => {
    setProducts(productList);
    handleBreakpoints();
    window.addEventListener('resize', handleBreakpoints);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='headphones' element={<Headphones products={products}/>}/>
        <Route path='speakers' element={<Speakers products={products}/>}/>
        <Route path='earphones' element={<Earphones products={products}/>}/>
        <Route path='product/:slug' element={<ProductDetails products={products}/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
