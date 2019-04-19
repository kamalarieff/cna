import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../app/components/Header';

describe('test', () => {
  it('test', () => {
    expect(true).toBe(true);
  });
});

describe('Components', () => {
  describe('Header', () => {
    it('should match the snapshot correctly', () => {
      const component = shallow(<Header />);
      expect(component).toMatchInlineSnapshot();
    });
  });
});
