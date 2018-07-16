import Counter from './counter';
import React from 'react';
import { shallow } from 'enzyme';

describe("Counter", () => {
    it("starts with a count of 0", () => {
        let container = shallow(<Counter />);
        let counterCount = container.state().count;
        expect(counterCount).toBe(0);
    });
});