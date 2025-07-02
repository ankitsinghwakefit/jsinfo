/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

//alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
function inBetween(arr, low, high){
    let result = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] >= low && arr[i] <= high){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(inBetween(arr,3,7));

//alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let num = i;
    let shooter = function() { // create a shooter function,
      alert( num ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.

// all shooters show 10 instead of their numbers 0, 1, 2, 3...