import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import AddService from './Pages/AddService/AddService/AddService';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageOrder from './Pages/ManageOrder/ManageOrder/ManageOrder';
import MyOrders from './Pages/MyOrders/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import Plans from './Pages/Plans/Plans/Plans';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
            <Header/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/plans">
              <Plans></Plans>
            </Route>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/manageAllOrders">
              <ManageOrder></ManageOrder>
            </Route>
            <Route exact path="/addNewService">
              <AddService></AddService>
            </Route>
            <Route exact path="/about">
            <AboutUs></AboutUs>
            </Route>
            <PrivateRoute exact path="/placeOrder/:planId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
