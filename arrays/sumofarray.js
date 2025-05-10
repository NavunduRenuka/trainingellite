const arr =[1,2,3,4,5,6]
function sumOfArray() {
    accumulator = 0;
    const sum = arr.reduce((accumulator,current) => accumulator+current);
    console.log("the sum of array is:",sum);
}
sumOfArray();

