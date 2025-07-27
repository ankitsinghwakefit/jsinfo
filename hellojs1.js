function createHelloWorld(one, ...args){
    //let ab = [...args]
    console.log('args',one, args)
    return function(){
        return "hello world";
    }
}

function createHelloWorld1(){
    return ()=> "hello world"
}
const ab = createHelloWorld(1,2,3,4);
console.log(ab())