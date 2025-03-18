import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {HeaderComponent} from '../header'
import {FooterComponent} from '../footer'
import React,{ useEffect } from 'react';
import { HomeComponent } from "../home";
import { AboutComponent } from "../about";
import { ServicesComponent } from "../services";
import { ContactComponent } from "../contact";
import {LayoutComponent} from "../layout";
import '../../../public/assets/js/owl.carousel.js';
 
const MainComponent = () => {
    return (
        <Router>
      <Routes>
        <Route element={<LayoutComponent />}>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/services" element={<ServicesComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </Router>
    );
}

export {MainComponent};