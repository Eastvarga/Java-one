const getItemsString = function(array) {
    'use strict';
    // Write code under this line
    const arr=array;
    let result='';
    for(let i=0;i<arr.length; i+=1){
        result+=`${(i+1)} - ${arr[i]}\n`;
        
        // result.push(`${i} - ${array[i]}\n`); 
     }
     return result ;
  };
  
//   console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));