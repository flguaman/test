function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  function it(msg, func) {
    try {
      func();
      console.log(msg + ': Test Passed');
    } catch (e) {
      console.error(msg + ': Test Failed');
    }
  }
  
  describe('sumArray', () => {
    it('should return the correct sum of the array', () => {
      const array = [1, 2, 3, 4, 5];
      const result = sumArray(array);
      if (result !== 15) {
        throw new Error('Expected sum to be 15');
      }
    });
  
    it('should return 0 for an empty array', () => {
      const array = [];
      const result = sumArray(array);
      if (result !== 0) {
        throw new Error('Expected sum to be 0');
      }
    });
  
    it('should return the same value for an array with a single element', () => {
      const array = [10];
      const result = sumArray(array);
      if (result !== 10) {
        throw new Error('Expected sum to be 10');
      }
    });
  });