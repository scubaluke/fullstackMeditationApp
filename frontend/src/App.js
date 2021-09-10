import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Layout from './components/Layout'
import RegisterUser from './components/RegisterUser'
// import Shop from './pages/ShopPage'
import Home from './pages/Home';
import Login from './components/Login';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import SendToPage from './pages/SendToPage';

export default function App() {
  return (
    <Router >
      <Layout>
        <Route path='/' component={Home} exact />
        <Route path='/home' component={Home}  />
        <Route path='/affirmations' component={Home} />
        <Route path='/fear' component={Home} /> 
        <Route path='/nsfw' component={Home} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/cart/:id?' component={CartPage} />
        <Route path='/register' component={RegisterUser} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/phone' component={SendToPage} />
      </Layout>     
    </Router>
  )
}

