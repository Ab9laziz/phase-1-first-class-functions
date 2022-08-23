function receivesAFunction(yes){
    yes();
}

function returnsANamedFunction(){
    return function myArray(){
        console.log('Hello');
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log('Stay dangerous!');
    }
}