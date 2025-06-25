let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

function getTotalSalary(obj){
  let totalSal  = 0;
  let objKeys = Object.keys(obj);
  objKeys.forEach(eachKey => {
    let len = Object.keys(obj[eachKey])[0] !== '0'
    if(len){
      totalSal += getTotalSalary(obj[eachKey])
    } else {
        obj[eachKey].forEach(key=>{
          totalSal += key.salary;
        })
      }
    })
    return totalSal;
}

//console.log(getTotalSalary(company));

function getPow(num, pow) {
  if (pow == 1) {
    return num;
  } else {
    return num * getPow(num, pow - 1);
  }
}

//console.log(getPow(3, 3));


// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
function sumTo(n){
  let sum = 0;
  if(n === 1){
    return n;
  } else {
    sum = n + sumTo(n-1);
  }
  return sum;
} 

//console.log(sumTo(4));


// 1, 1, 2, 3, 5, 8, 13, 21

function fib(n) {
  let current = 1;
  let prev = 1;
  if(n <= 1){
    return n
  } else {
    for(let i = 3; i<=n; i++){
      let next = current + prev
      prev = current
      current = next
    }
  }
  console.log(current)
}

fib(5);
fib(6);
fib(77);