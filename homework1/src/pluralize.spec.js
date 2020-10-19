/* global require, test, expect */
const { plural } = require("./index");

test("Год", () => {
  for (let index = 0; index < 1000; index++) {
    
    if(index % 10 == 1 && index % 100 != 11){
        expect(plural(index)).toBe(index + " год"); 
    }
}
});

test("Года", () => {
  for (let index = 0; index < 1000; index++) {

  if (index % 10 >= 2 && index % 10 <= 4 && index % 100 != 12 && index % 100 != 13 && index % 100 != 14) {
        expect(plural(index)).toBe(index + " года"); 
  }
}

});

test("Лет", () => {
  for (let index = 0; index < 1000; index++) {
    if (index % 10 >4 && index % 10 < 11 && index % 100 >= 11 && index % 100 <= 20)
        expect(plural(index)).toBe(index + " лет"); 
}
});
