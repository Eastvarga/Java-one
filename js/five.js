'use strict'
function findLongestWord (string = "") {
    // Write code under this line
    const str=string.split(' ');
    let biggest='';
    for(let i=0; i<str.length; i+=1){
        if(str[i].length>biggest.length)
        biggest=str[i];
    }
    return biggest;
  }
  
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  // 'jumped'
  
//   console.log(findLongestWord('Google do a roll'));
  // 'Google'
  
//   console.log(findLongestWord('May the force be with you'));
  // 'force'