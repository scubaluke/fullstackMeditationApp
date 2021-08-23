import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Layout from './components/Layout'
import RegisterUser from './components/RegisterUser'
import Shop from './pages/ShopPage'
import Home from './pages/Home';
import Login from './components/Login';
// import Fear from './pages/Fear';
// import NSFW from './pages/NSFW';
// import Affirmations from './pages/Affirmations';

export default function App() {
  return (
    <Router >
      <Layout>
        <Route path='/' component={Home} exact />
        <Route path='/home' component={Home}  />
        <Route path='/affirmations' component={Home} />
        <Route path='/fear' component={Home} /> 
        <Route path='/nsfw' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/register' component={RegisterUser} />

      </Layout>     
    </Router>
  )
}

