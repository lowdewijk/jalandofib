import { fooBar } from './fooBar';

    describe(`foo|bar based on % 3|5`, () => {
      const foobarElements = [1, 2, 'Foo', 4, 'Bar', 'Foo', 7, 8, 'Foo', 'Bar', 11, 'Foo', 13, 14, 'FooBar']; 
    
      foobarElements.forEach((foobarElement, i) => {
        test(`FooBar ${i} should be ${foobarElement}`, () => {
          expect(fooBar(i)).toBe(foobarElement);
        });
      });
    });