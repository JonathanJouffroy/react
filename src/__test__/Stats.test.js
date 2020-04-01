
import React from 'react';
import ReactDOM from 'react-dom';
import {Stats} from '../views/Stats';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })


 it('renders without crashing', () => {
 shallow(<Stats users={[{}]} products={[{price:"500"},{price:"800"},{price:"900"},{price:"1000"}]}/>);
 });