function getTicket(n){
    let arr = new Array(n);
    for (let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random() * 10)
    }
    return arr;
}

//Sum of the array of the ticket

function sum(arr){
    return arr.reduce((prevVal,currVal) => prevVal + currVal)
 
}

export {getTicket,sum}
