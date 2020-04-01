
import React from 'react';
import ReactDOM from 'react-dom';
import {Orders} from '../views/Orders';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })


 it('renders without crashing', () => {
  shallow(<Orders orders={[{
    name_order:"12",
    price_order:"500",
    ship_address:"7 cours de la République",
    billing_address:"7 cours de la République"
  }]}/>);
 });