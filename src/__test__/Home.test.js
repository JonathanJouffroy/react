
import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from '../views/Home';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })


 it('renders without crashing', () => {
  shallow(<Home users={[{name:"John",firstname:"test"},{name:"John",firstname:"test"},{name:"John",firstname:"test"}]} products={[{}]} orders={[{}]} />);
 });