import React from 'react'
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import About from './components/About';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Status from './components/Status';
import Profile from './components/Profile';
import { Container, CssBaseline } from '@material-ui/core'
import OrderHistory from './components/OrderHistory';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" >
          <Router>
            <Switch>
              <Route exact path="/" component={Landing}  />
              <Route exact path="/menu" component={Menu}  />
              <Route exact path="/about" component={About}  />
              <Route exact path="/profile" component={Profile}  />
              <Route exact path="/cart" component={Cart}  />
              <Route exact path="/status" component={Status}  />
              <Route exact path="/orderhistory" component={OrderHistory}  />
            </Switch>
          </Router>
        </Container>
    </>
  )
}
