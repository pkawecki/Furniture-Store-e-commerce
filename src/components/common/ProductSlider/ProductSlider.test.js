import ProductSlider from './ProductSlider';
import React from 'react';
import { shallow } from 'enzyme';

describe('Component ProductSlider', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductSlider />);
    expect(component).toBeTruthy();
  });
});
