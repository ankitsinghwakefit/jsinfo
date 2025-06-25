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

console.log(getTotalSalary(company));

function getPow(num, pow) {
  if (pow == 1) {
    return num;
  } else {
    return num * getPow(num, pow - 1);
  }
}

//console.log(getPow(3, 3));
