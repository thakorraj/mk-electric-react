
import {HeaderComponent} from '../header';
import {FooterComponent} from '../footer';
import { Outlet } from 'react-router-dom';
const LayoutComponent = () => {
    return (
        <div>
          <HeaderComponent />
            <Outlet /> {/* This renders the child route component */}
          <FooterComponent />
        </div>
      );
}

export {LayoutComponent};