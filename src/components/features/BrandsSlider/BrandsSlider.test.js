import React from 'react';
import { shallow } from 'enzyme';
import BrandsSlider from './BrandsSlider';

describe('Component brandsSlider', () => {
  it('should render without crashing', () => {
    const component = shallow(<BrandsSlider />);
    expect(component).toBeTruthy();
  });
});
