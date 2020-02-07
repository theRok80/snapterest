import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

Enzyme.configure({adapter: new Adapter()});

describe('Button', () => {
  test('calls click handler function on click', () => {
    const handleClickMock = jest.fn();
    const wrapper = Enzyme.shallow(<Button handleClick={handleClickMock}/>);

    wrapper.find('button').simulate('click');
    expect(handleClickMock.mock.calls.length).toBe(1);
  });
});