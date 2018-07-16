import createObj from './createObj';

describe('createObj', () => {
    it("turns arrays with keys and values into an object", () =>{
        expect(createObj(['a', 'b'], [1, 2])).toEqual({a:1,b:2});
    });
});