const Calculate = {
    factorial(num) {
      let factorial = 1;
      for(let i = num; i > 1; i--) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  module.exports = Calculate;  