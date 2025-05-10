const arr = [1,2,3,4,5,6,7,8]
function evenOrOdd() {
    const evennumber = arr.filter(number => number%2 ==0);
    const oddnumber = arr.filter(number => number%2 !==0);
    console.log("the number is:", evennumber);
    console.log("the number is:", oddnumber);
} 
evenOrOdd;
