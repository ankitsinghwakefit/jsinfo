function counter(initCount){
    let count = initCount
    const increment = () => {
        return ++count
    }
    const decrement = () => {
        return --count
    } 
    const reset = () => {
        count = initCount
        return count
    }
    return {
        increment,
        decrement,
        reset
    }
}

const counterfun = counter(2);
console.log(counterfun.increment());
console.log(counterfun.decrement())
console.log(counterfun.reset())
console.log(counterfun.increment());
console.log(counterfun.decrement())
console.log(counterfun.reset())
console.log(counterfun.increment());
console.log(counterfun.increment());
console.log(counterfun.increment());