import Promoted from './Promoted';
import React from 'react';
import { shallow } from 'enzyme';

describe('Component Promoted', () => {
  it('should render without crashing', () => {
    const component = shallow(<Promoted />);
    expect(component).toBeTruthy();
  });
});
