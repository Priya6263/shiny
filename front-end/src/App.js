import Nav from './compenents/Nav';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from './compenents/Footer';
import SignUp from './compenents/SignUp'; 
import PriateComponent from './compenents/PrivateComponent';
import Login from './compenents/Login';
import AddProduct from './compenents/AddProduct';
import ProductList from './compenents/ProductList';
import UpdateProduct from './compenents/UpdateProduct';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav />
     <Routes>


      <Route element={<PriateComponent />} >
      <Route path="/" element={<ProductList />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/update/:id" element={<UpdateProduct/>} />
      <Route path="/logout" element={<h1>Logout component</h1>} />
      <Route path="/profile" element={<h1>Profile component</h1>} />
      </Route>


      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
     </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
