import { isEven } from './isEven';

  describe('even or odd', () => {
    const evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    const odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    test('isEven', () => {
      expect(isEven(evens[1])).toBe(true);
    });
  
    test('isOdd', () => {
      expect(isEven(odds[1])).toBe(false);
    });
  });
