import Chatbox from './Chatbox';
import React from 'react';
import { shallow } from 'enzyme';

describe('Component Chatbox', () => {
  it('should render without crashing', () => {
    const component = shallow(<Chatbox />);
    expect(component).toBeTruthy();
  });
});
