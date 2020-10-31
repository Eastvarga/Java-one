function reduceArray(arr) {
    'use strict';
    let total = 0;
    // Write code under this line
    if(arr.length>0){ 
    for(let i=0; i<arr.length; i+=1){
         total+=arr[i];
     } return total;
    }else return total;
  };
  
//   console.log(reduceArray([1, 2, 3]));
  // 6
  
//   console.log(reduceArray([-2, 0, 2]));
  // 0
  
//   console.log(reduceArray([1, 2, 2.5]));
  // 5.5
//   console.log(reduceArray([]));