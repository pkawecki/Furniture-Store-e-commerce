import ProductCompareBox from './ProductCompareBox';
import React from 'react';
import { shallow } from 'enzyme';

describe('Component ProductCompareBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductCompareBox />);
    expect(component).toBeTruthy();
  });
});
