function mul(num){
    return num * 2;
}

const ary = [1,2,3,4,5]
function transform(ary, fun){
    const result = [];
    // for(let i = 0; i < ary.length; i++){
    //     result.push(fun(ary[i]))
    // }
    for(let val of ary){
        result.push(fun(val))
    }
    return result;
}

console.log(transform(ary, mul));