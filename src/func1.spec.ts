import { func1 } from './func1';

describe(`test suite`, () => {
    test(`test case 1`, () => {
        expect(func1).not.toThrow();
    });
});
