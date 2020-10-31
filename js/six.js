'use strict'
function formatString (str, maxLength = 40) {
    // Write code under this line
   
   
//    let del=str.length-maxLength;
    if(str.length<=maxLength){
        return str;
    } else{
   let br=str.slice(0, maxLength)+'...';
    return br;
    }
  }
  
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'