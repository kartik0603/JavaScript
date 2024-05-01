let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let min = array[0];

for (let i = 0; i <= array.length; i++) {
  if (array[i] < min) {
    max = array[i];
  }
}
console.log(min);

