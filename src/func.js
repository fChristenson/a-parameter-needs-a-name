/**
 * Try to avoid having this many input parameters but if you can't make sure
 * to name them well, you know what, always give things good names.
 * 
 * I am sure that this is the first time you ever heard that.
 */
const fizzBuzz = (timesToRun, timesToSayFizz, timesToSayBuzz, timesToSayFizzBuzz, logFunc) => {
  let numFizz = 0;
  let numBuzz = 0;
  let numFizzBuzz = 0;

  for(let i = 0; i < timesToRun; i++) {
    if(numFizz > timesToSayFizz || numBuzz > timesToSayBuzz || numFizzBuzz > timesToSayFizzBuzz) return;
    
    if(i % 3 === 0 && i % 5 === 0) {
      logFunc("FizzBuzz");
      numFizzBuzz++;
    } else if(i % 5 === 0) {
      logFunc("Buzz");
      numBuzz++;
    } else if(i % 3 === 0) {
      logFunc("Fizz");
      numFizz++;
    } else {
      logFunc(i);
    }
  }
};

module.exports = fizzBuzz;