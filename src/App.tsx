import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'Pages/Home';
import Products from 'Pages/Products';
import Services from 'Pages/Services';
import Faq from 'Pages/Faq';
import About from 'Pages/About';
import Contact from 'Pages/Contact';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import ScrollTop from 'components/ScrollTop';

class App extends React.Component {
  componentDidMount() {
    document.getElementById('loading').remove();
  }
  render() {
    return (
      <div>
        <Router>
          <ScrollTop>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </ScrollTop>
        </Router>
      </div>
    )
  }
}

export default App;
