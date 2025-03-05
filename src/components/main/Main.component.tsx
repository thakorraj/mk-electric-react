import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {HeaderComponent} from '../header'
import {FooterComponent} from '../footer'
import React,{ useEffect } from 'react';
import { HomeComponent } from "../home";
import {LayoutComponent} from "../layout";
import '../../../public/assets/js/owl.carousel.js';
 
const MainComponent = () => {
    return (
        <Router>
      <Routes>
        <Route element={<LayoutComponent />}>
          <Route path="/" element={<HomeComponent />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </Router>
    );
}

export {MainComponent};