import ProductCompareBar from './ProductCompareBar';
import React from 'react';
import { shallow } from 'enzyme';

describe('Component ProductCompareBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductCompareBar />);
    expect(component).toBeTruthy();
  });
});
