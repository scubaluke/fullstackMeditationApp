import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Layout from './components/Layout'

import Store from './pages/Store'
import Home from './pages/Home';
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
        <Route path='/store' component={Store} />
      </Layout>     
    </Router>
  )
}

