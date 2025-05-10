let arr =[1,2,3,4,5,6,7,8]
function maximum() {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    console.log("the maximum sum is:",max);
    console.log("the minimum sum is:",min);
}
maximum();