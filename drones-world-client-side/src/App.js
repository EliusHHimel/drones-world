import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Checkout from './Pages/Checkout/Checkout';
import Dashboard from './Pages/Dashboard/Admin/Dashboard/Dashboard';
import AllProducts from './Pages/AllProducts/AllProducts';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <PrivateRoute path='/dashboard'>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path='/products'>
          <AllProducts></AllProducts>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <PrivateRoute path='/checkout/:id'>
          <Checkout></Checkout>
        </PrivateRoute>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
