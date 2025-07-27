const getCounter = (initialValue) => {
    //let counter = initialValue;
    return () => {
        return initialValue++;
    }
}

const count = getCounter(10);
console.log(count())
console.log(count())
console.log(count())

const count2 = getCounter(20);
console.log(count2())
console.log(count2())
console.log(count2())