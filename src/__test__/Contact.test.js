
import React from 'react';
import ReactDOM from 'react-dom';
import {Contact} from '../views/Contact';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })


 it('renders without crashing', () => {
  shallow(<Contact />);
 });