import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './components/Header/header';
import { useDispatch } from 'react-redux';
import { changeCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';
import Footer from 'components/Footer/footer';

function App() {

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
    handleBreakpoints();
    window.addEventListener('resize', handleBreakpoints);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
