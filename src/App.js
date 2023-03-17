import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import '../src/styles/style.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import Delivery from './pages/Delivery/Delivery';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path="/delivery" element={<Delivery/>}/>
          <Route path="/catalog/*" element={<Catalog/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
