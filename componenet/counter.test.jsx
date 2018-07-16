import Counter from './counter';
import React from 'react';
import { shallow } from 'enzyme';
import Foo from './foo';

describe("Counter", () => {
    it("starts with a count of 0", () => {
        let container = shallow(<Counter />);
        let counterCount = container.state().count;
        expect(counterCount).toBe(0);
    });

    it("renders 'count' foos", () => {
        let container = shallow(<Counter/>);
        expect(container.find("Foo").length).toBe(0);
        container.find("button").simulate("click");
        expect(container.find("Foo").length).toBe(1);
    });
});