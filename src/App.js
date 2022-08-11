import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import PageNotFound from './pages/Shared/PageNotFound';
import RequireAuth from './pages/Require/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import MyReview from './pages/Dashboard/MyReview';
import MyOrders from './pages/Dashboard/MyOrders';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Require/RequireAdmin';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProducts from './pages/Dashboard/ManageProducts';
import ManageOrders from './pages/Dashboard/ManageOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Payment from './pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile />} />
          <Route path='myReview' element={<MyReview />} />
          <Route path='myOrders' element={<MyOrders />} />
          <Route path='payment/:id' element={<Payment />} />
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>} />
          <Route path='addProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders /></RequireAdmin>} />
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
