import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import NotFoundPage from '../pages/NotFound';
import ReportPage from '../pages/Report';
import ReportHistoryPage from '../pages/ReportHistory';
import PricingPage from '../pages/Pricing'
import AccountPage from '../pages/Account'
import Header from './Header';
import Footer from './Footer'

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 'padding: 0 16px',
};

const App = () => {
  return (
    <div style={containerStyles}>
      <Header />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/report" component={ReportPage} />
        <Route path="/reporthistory" component={ReportHistoryPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/account" component={AccountPage} />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer/>
    </div>
  );
};

export default App;
