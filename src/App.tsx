import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './components/Header/header';
import { useDispatch } from 'react-redux';
import { changeCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';
import Footer from 'components/Footer/footer';
import Headphones from 'pages/Headphones/headphones';
import ScrollToTop from 'components/ScrollToTop';
import IProduct from 'interfaces/product';
import productList from 'data/data.json';

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
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='category'>
          <Route path='headphones' element={<Headphones products={products}/>}/>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
