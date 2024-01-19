
function findMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

const describe = (description, tests) => {
  console.log(description);
  tests();
}

function it(msg, func) {
  try {
    func();
   alert(msg + ': Test Passed');
  } catch (e) {
    alert (msg + ': Test Failed');
  }
}

describe('findMax', () => {
  it('should return the correct maximum value in the array', () => {
    const array = [2, 8, 4, 10, 6];
    const result = findMax(array);
    expect(result).to.equal(10);
  });

  it('should return the correct maximum value for negative numbers', () => {
    const array = [-5, -2, -8, -3, -10];
    const result = findMax(array);
    expect(result).to.equal(-2);
  });

  it('should return the same value for an array with a single element', () => {
    const array = [7];
    const result = findMax(array);
    expect(result).to.equal(7);
  });
});

// Assert function
const expect = (actual) => ({
  to: {
    equal: (expected) => {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    }
  }
});