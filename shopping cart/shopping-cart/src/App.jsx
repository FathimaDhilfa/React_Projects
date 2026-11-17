import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Product from './components/Product';
import Home from './components/Home'
import Header from './components/Header';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element = {<Landing/>} />
      <Route path='/prodct/:num' element = {<Product/>}/>
      <Route path = '/home' element = {<Home/>}/>
    </Routes>
    </>
  )
}

export default App
